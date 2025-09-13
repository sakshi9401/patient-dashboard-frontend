"use client";
import { useState } from "react";
import {
  HomeIcon,
  ClipboardIcon,
  ArchiveBoxIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    id: 1,
    label: "Dashboard",
    icon: HomeIcon,
    badge: null,
    href: "/dashboard",
  },
  {
    id: 2,
    label: "List of surgeries",
    icon: ClipboardIcon,
    badge: "01",
    href: "/surgeries",
  },
  {
    id: 3,
    label: "Inventory Catalogue",
    icon: ArchiveBoxIcon,
    badge: null,
    href: "/inventory",
  },
  {
    id: 4,
    label: "Purchase Orders",
    icon: ShoppingCartIcon,
    badge: "01",
    href: "/orders",
  },
  {
    id: 5,
    label: "Surgery Plan",
    icon: UserGroupIcon,
    badge: "04",
    href: "/plan",
  },
];

export default function Sidebar({ active = "/dashboard" }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-[#0f2a47] text-white h-screen transition-all duration-200 flex flex-col
        ${collapsed ? "w-20" : "w-64"} shrink-0`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center justify-center rounded-md ${
              collapsed ? "w-8 h-8" : "w-10 h-10 bg-white/10 p-2"
            }`}
          >
            <span className="font-bold text-lg">CL</span>
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-sm font-semibold">Clinic</h1>
              <p className="text-xs text-white/70">Manage surgeries</p>
            </div>
          )}
        </div>

        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-white/5"
        >
          <Bars3Icon className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-auto">
        <ul className="mt-4 space-y-1 px-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.href;
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`group flex items-center gap-3 w-full rounded-md px-2 py-3 text-sm transition-colors
            ${
              isActive
                ? "bg-white/10 text-white"
                : "text-white/80 hover:bg-white/5"
            }`}
                >
                  <div className="flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  {!collapsed && (
                    <>
                      <span className="flex-1">{link.label}</span>
                      {link.badge && (
                        <span className="text-xs bg-[#1f71ff] text-white px-2 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            A
          </div>
          {!collapsed && (
            <div>
              <div className="text-sm font-medium">Clinic</div>
              <div className="text-xs text-white/60">Admin</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}