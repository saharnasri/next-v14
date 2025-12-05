"use client";
import Button from "@/components/UI/Button";
import { log } from "console";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}
function LoginForm() {
  const { register, handleSubmit } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = (loginData) => {
    console.log(loginData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("email")} />
      <label>Password</label>
      <input {...register("password")} />
      <Button>Submit</Button>
    </form>
  );
}

export default LoginForm;
