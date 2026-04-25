"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { initOpenAPIAuth, isAuthenticated } from "@/lib/auth";
import SideNavBar from "../components/SideNavBar";

/**
 * Dashboard layout with auth guard.
 *
 * On every mount (and on auth-change events) we verify a JWT exists.
 * If not, the user is silently redirected to the login page.
 *
 * This is a **UX guard**, not a security boundary — the backend is the
 * real gatekeeper and will 401 unauthenticated requests.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  // Ensure OpenAPI token resolver is wired up at layout level too,
  // as a defence-in-depth measure alongside AuthProvider.
  initOpenAPIAuth();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/login");
      return;
    }
    setChecked(true);

    // Re-check if the token is removed while the page is open
    const onAuthChange = () => {
      if (!isAuthenticated()) {
        router.replace("/login");
      }
    };

    window.addEventListener("auth-change", onAuthChange);
    window.addEventListener("storage", onAuthChange);

    return () => {
      window.removeEventListener("auth-change", onAuthChange);
      window.removeEventListener("storage", onAuthChange);
    };
  }, [router]);

  // Don't render children until we've confirmed the token exists —
  // this prevents a flash of the authenticated UI and, more importantly,
  // prevents API calls from firing without a token.
  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar for Desktop */}
      <SideNavBar />

      {/* Main Content Area (padding-left handles the sidebar width on desktop) */}
      <div className="flex-1 w-full lg:pl-64">
        {children}
      </div>
    </div>
  );
}
