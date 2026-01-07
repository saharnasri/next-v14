import { UseFormRegister, ValidationRule } from "react-hook-form";
export interface IAuthForm {
    email: string;
    password: string;
}
export interface IAuthInput {
    type?: string;
    label: string;
    name: "email" | "password";
    error: string | undefined;
    required: string | boolean;
    containerCls: string;
    validationSchema: ValidationRule<RegExp> | undefined;
    register: UseFormRegister<IAuthForm>;

}

