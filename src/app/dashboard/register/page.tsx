import { UserRegistrationForm } from "@/components/formRegister";
import React from "react";
// import "./style.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Register</h1>
      <UserRegistrationForm />
    </main>
  );
}
