"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SideNavBar() {
  const pathname = usePathname();

  // Helper function to determine class based on active path
  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const baseClasses =
      "flex items-center space-x-3 px-3 py-2.5 rounded-md group transition-all duration-200";
    if (isActive) {
      return `${baseClasses} text-primary bg-surface-container-low shadow-[inset_0px_0px_10px_rgba(173,198,255,0.1)] border-l-4 border-primary`;
    }
    return `${baseClasses} text-on-surface-variant opacity-70 hover:bg-surface-container-high hover:opacity-100 hover:translate-x-1`;
  };

  return (
    <nav className="bg-surface-container-lowest text-primary font-sans text-sm font-medium h-screen w-64 fixed left-0 top-0 flex flex-col p-4 space-y-6 z-50 border-r border-outline-variant/15">
      {/* Brand/Header Area */}
      <div className="flex items-center space-x-3 px-2 pt-4">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="User Profile Avatar"
            className="w-10 h-10 rounded-full object-cover shadow-[0_0_15px_rgba(173,198,255,0.2)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB7Yqvs_eNRk9tj-BsPVOhdpLDJswWYQY31M7ak1qC7549DbQ3NgZPApMgeJqZHBX5nxBBeMmfFKwtZ_ht-8HZ4iwAswgTTh99FIARZiEII1LU_BL5DWRA4BKofBwqCflKeJR-AICBDDxe2LOBKhh2Kh_E238_mBYDfhPks3Vz9VtxA72OxloWNf3NWvwoyNalcyEPaAGDAkQg9wrjkNLdXLRbUaM_X95Iq53qOfS41pHFZHJuTpEPIcsV7W-3d7-wORJn26Q_aJrv"
          />
          <div className="absolute -bottom-1 -right-1 bg-surface-container-lowest rounded-full p-[2px]">
            <div className="w-3 h-3 bg-secondary rounded-full shadow-[0_0_8px_rgba(78,222,163,0.6)]"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-on-surface font-black uppercase tracking-widest text-xs leading-tight">
            The Developer
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto space-y-2 mt-6">
        <Link className={getLinkClasses("/dashboard")} href="/dashboard">
          <span
            className="material-symbols-outlined"
            style={{
              fontVariationSettings:
                pathname === "/dashboard" ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            dashboard
          </span>
          <span>Overview</span>
        </Link>
        <Link className={getLinkClasses("/problems")} href="/problems">
          <span
            className="material-symbols-outlined transition-colors"
            style={{
              fontVariationSettings:
                pathname === "/problems" ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            code
          </span>
          <span>Problems</span>
        </Link>
      </div>

      {/* Footer Area */}
      <div className="space-y-4 pt-4">
        <div className="space-y-1">
          <Link
            className="flex items-center space-x-3 px-3 py-2 text-[#c2c6d6] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-colors rounded-md text-xs group"
            href="#"
          >
            <span className="material-symbols-outlined text-[18px]">
              contact_support
            </span>
            <span>Support</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
