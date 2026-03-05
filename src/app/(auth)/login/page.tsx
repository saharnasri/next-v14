import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <section>
      <h1 className="font-bold text-lg mb-8">LogIn:</h1>
      <LoginForm />
      <div className="text-gray-800 text-center">
        <div>
          <span className="me-1"> Do not have an account?</span>
          <Link href="/register" className="font-bold">
            Register
          </Link>
        </div>
        <Link href="/" className="text-sm">
          HomePage
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
