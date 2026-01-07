import { IAuthInput } from "@/types/models";
import React from "react";

function TextField({
  type = "text",
  label,
  name,
  error,
  required,
  containerCls,
  validationSchema,
  register,
}: IAuthInput) {
  return (
    <div className={containerCls}>
      <label className="mb-1">{label}</label>
      <input
        type={type}
        className="mb-1"
        {...register(name, {
          required: required,
          pattern: validationSchema,
        })}
      />
      <div className="text-sm text-red-500 min-h-5">{error}</div>
    </div>
  );
}

export default TextField;
