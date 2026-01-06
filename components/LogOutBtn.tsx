"use client";

import { signOut } from "next-auth/react";

export default function BtnLogout() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="
        w-full flex items-center gap-3 px-4 py-2 text-sm font-medium
        text-red-600 rounded-lg
        hover:bg-red-300
        active:bg-red-100
        transition-colors
      "
    >
      Logout
    </button>
  );
}
