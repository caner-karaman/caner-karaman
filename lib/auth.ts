import { OpenAPI } from "@/services/api";

// ─── Constants ───────────────────────────────────────────────────────────────
const TOKEN_KEY = "auth-token";
const REFRESH_TOKEN_KEY = "refresh-token";
const AUTH_CHANGE_EVENT = "auth-change";

// ─── Token helpers ───────────────────────────────────────────────────────────

/**
 * Returns the stored JWT, or an empty string if none exists.
 * Safe to call on the server (returns "").
 */
export function getAuthToken(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(TOKEN_KEY) ?? "";
}

/**
 * Returns the stored refresh token, or an empty string if none exists.
 */
export function getRefreshToken(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(REFRESH_TOKEN_KEY) ?? "";
}

/**
 * Persists a new JWT and broadcasts an auth-change event so that
 * any listening component (TopNavBar, AuthProvider, etc.) can react.
 */
export function setAuthToken(token: string, refreshToken?: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

/**
 * Removes the stored JWT and broadcasts an auth-change event.
 */
export function clearAuthToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

/**
 * Quick boolean check — does a non-empty token exist?
 */
export function isAuthenticated(): boolean {
  return getAuthToken().length > 0;
}

// ─── OpenAPI integration ─────────────────────────────────────────────────────

import { PublicAuthResourceService } from "@/services/api";

let _initialized = false;
let _refreshPromise: Promise<string> | null = null;

/**
 * Wires up the generated OpenAPI client so every outgoing request
 * includes an Authorization: Bearer header when a token exists.
 *
 * Safe to call multiple times — only the first call has any effect.
 */
export function initOpenAPIAuth(): void {
  if (_initialized) return;
  _initialized = true;

  OpenAPI.TOKEN = async () => getAuthToken();

  if (typeof window !== "undefined") {
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      let response = await originalFetch(input, init);

      let urlString = "";
      if (typeof input === "string") urlString = input;
      else if (input instanceof URL) urlString = input.toString();
      else if (input instanceof Request) urlString = input.url;

      if (
        response.status === 401 &&
        !urlString.includes("/api/public/auth/refresh") &&
        !urlString.includes("/api/public/auth/login") &&
        urlString.startsWith(OpenAPI.BASE)
      ) {
        const refreshToken = getRefreshToken();
        if (refreshToken) {
          if (!_refreshPromise) {
            _refreshPromise = PublicAuthResourceService.refresh({ refreshToken })
              .then((refreshResponse) => {
                if (refreshResponse.id_token) {
                  setAuthToken(refreshResponse.id_token, refreshResponse.refresh_token);
                  return refreshResponse.id_token;
                }
                throw new Error("No id_token in refresh response");
              })
              .catch((e) => {
                clearAuthToken();
                throw e;
              })
              .finally(() => {
                _refreshPromise = null;
              });
          }

          try {
            const newIdToken = await _refreshPromise;
            // Retry the original request
            const headers = new Headers(init?.headers);
            headers.set("Authorization", `Bearer ${newIdToken}`);
            const newInit = { ...init, headers };
            response = await originalFetch(input, newInit);
          } catch (e) {
            // Refresh failed, response remains the 401
          }
        } else {
          clearAuthToken();
        }
      }

      return response;
    };
  }
}

// ─── Eager initialization ────────────────────────────────────────────────────
// This runs as soon as the module is first evaluated on the client.
// Combined with the explicit call inside AuthProvider, this guarantees
// the TOKEN resolver is in place before any service call.
if (typeof window !== "undefined") {
  initOpenAPIAuth();
}
