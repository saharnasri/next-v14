import React from "react";
import "../globals.css";
import Card from "@/components/UI/Card";
function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="h-dvh content-center">
          <Card cls="w-1/3 m-auto">{children}</Card>
        </main>
      </body>
    </html>
  );
}

export default AuthLayout;
