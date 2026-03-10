"use client";
import Button from "@/components/UI/Button";
import TextField from "@/components/UI/TextField";
import { login } from "@/services/authService";
import { IAuthForm } from "@/types/models";
import { log } from "console";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>();
  const emailValidation = {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Enter a valid email",
  };
  const passwordValidation = {
    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    message:
      "Enter a valid password ( combination of alphabet, numeric, and special characters)",
  };
  const onSubmit: SubmitHandler<IAuthForm> = async (loginData) => {
    console.log(loginData);
    const res = await login(loginData);
    console.log("resss", res);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        validationSchema={emailValidation}
        name="email"
        error={errors.email?.message}
        register={register}
        required="Enter email"
        containerCls="mb-1 flex flex-col"
      />
      <TextField
        type="password"
        label="Password"
        validationSchema={passwordValidation}
        name="password"
        error={errors.password?.message}
        register={register}
        required="Enter password"
        containerCls="mb-1 flex flex-col"
      />

      <div>
        <Button className="w-full my-4">Submit</Button>
      </div>
    </form>
  );
}

export default RegisterForm;
