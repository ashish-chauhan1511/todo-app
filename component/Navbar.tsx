"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/login" || pathname === "/register" ) {
    return null;
  }

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="navbar__logo">
        Todo App
      </h2>

      <div className="navbar__links">
        <Link
          href="/dashboard"
          className="navbar__link"
        >
          Dashboard
        </Link>

        {/* <Link
          href="/register"
          className="navbar__link"
        >
          Register
        </Link> */}

        <button
          className="navbar__button"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}