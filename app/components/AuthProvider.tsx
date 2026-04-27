"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  initOpenAPIAuth,
  isAuthenticated as checkAuth,
  setAuthToken,
  clearAuthToken,
} from "@/lib/auth";

// ─── Context ─────────────────────────────────────────────────────────────────

interface AuthContextValue {
  /** Whether the user has a valid (non-empty) JWT in storage. */
  isLoggedIn: boolean;
  /** Persist a token, update context, and notify other tabs/components. */
  login: (token: string, refreshToken?: string) => void;
  /** Remove the token, update context, and notify other tabs/components. */
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

// ─── Provider ────────────────────────────────────────────────────────────────

/**
 * Client component that:
 * 1. Guarantees `OpenAPI.TOKEN` is wired up before any child renders.
 * 2. Exposes auth state (and login/logout helpers) via React context so
 *    components don't need to touch localStorage directly.
 * 3. Listens for cross-tab `storage` events and custom `auth-change`
 *    events so the UI stays in sync.
 */
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Eagerly initialise on every render path — the function is idempotent
  // so this is cheap and guarantees the resolver is in place even if the
  // module-level side-effect hasn't run yet (code-splitting edge case).
  initOpenAPIAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sync auth state from storage
  const syncAuth = useCallback(() => {
    setIsLoggedIn(checkAuth());
  }, []);

  useEffect(() => {
    // Initial read
    syncAuth();

    // Cross-component and cross-tab reactivity
    window.addEventListener("auth-change", syncAuth);
    window.addEventListener("storage", syncAuth);

    return () => {
      window.removeEventListener("auth-change", syncAuth);
      window.removeEventListener("storage", syncAuth);
    };
  }, [syncAuth]);

  const login = useCallback((token: string, refreshToken?: string) => {
    setAuthToken(token, refreshToken);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    clearAuthToken();
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
