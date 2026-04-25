import { OpenAPI } from "@/services/api";

// ─── Constants ───────────────────────────────────────────────────────────────
const TOKEN_KEY = "auth-token";
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
 * Persists a new JWT and broadcasts an auth-change event so that
 * any listening component (TopNavBar, AuthProvider, etc.) can react.
 */
export function setAuthToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

/**
 * Removes the stored JWT and broadcasts an auth-change event.
 */
export function clearAuthToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

/**
 * Quick boolean check — does a non-empty token exist?
 */
export function isAuthenticated(): boolean {
  return getAuthToken().length > 0;
}

// ─── OpenAPI integration ─────────────────────────────────────────────────────

let _initialized = false;

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
}

// ─── Eager initialization ────────────────────────────────────────────────────
// This runs as soon as the module is first evaluated on the client.
// Combined with the explicit call inside AuthProvider, this guarantees
// the TOKEN resolver is in place before any service call.
if (typeof window !== "undefined") {
  initOpenAPIAuth();
}
