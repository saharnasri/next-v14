"use client";
import Button from "@/components/UI/Button";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = (loginData) => {
    console.log(loginData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-1 flex flex-col">
        <label className="mb-1">Email</label>
        <input
          {...register("email", {
            required: "Enter email",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Enter a valid email",
            },
          })}
        />
        <div className="text-sm text-red-500 min-h-5">
          {errors.email?.message}
        </div>
      </div>

      <div className="mb-1 flex flex-col">
        <label className="mb-1">Password</label>
        <input
          {...register("password", {
            required: "Enter Password",
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message: "Enter a valid password",
            },
          })}
        />
        <div className="text-sm text-red-500 min-h-5">
          {errors.password?.message}
        </div>
      </div>
      <div>
        <Button className="w-full my-4">Submit</Button>
      </div>
    </form>
  );
}

export default LoginForm;
