import Button from "@/components/UI/Button";
import Link from "next/link";
import React from "react";

function RegisterPage() {
  return (
    <section>
      <h1 className="font-bold text-lg">Register:</h1>
      <form>
        <div>form</div>
        <Button>Submit</Button>
      </form>
      <div className="text-gray-500 text-center">
        <div>
          Already have an account?{" "}
          <Link href="/login" className="font-bold">
            LogIn
          </Link>
        </div>
        <Link href="/" className="text-sm">
          HomePage
        </Link>
      </div>
    </section>
  );
}

export default RegisterPage;
