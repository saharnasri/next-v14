import Button from "@/components/UI/Button";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <section>
      <h1 className="font-bold text-lg">LogIn:</h1>
      <form>
        <div>form</div>
        <Button>Submit</Button>
      </form>
      <div className="text-gray-500 text-center">
        <div>
          Do not have an account?{" "}
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
