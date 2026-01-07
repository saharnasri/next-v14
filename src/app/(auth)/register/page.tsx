import Link from "next/link";
import RegisterForm from "./RegisterForm";

function RegisterPage() {
  return (
    <section>
      <h1 className="font-bold text-lg mb-8">Register:</h1>
      <RegisterForm />
      <div className="text-gray-500 text-center">
        <div>
          Already have an account?
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
