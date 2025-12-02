import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="flex justify-between px-8 py-4 bg-green-500">
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Link href="/login">LogIn</Link>
    </nav>
  );
}

export default Header;
