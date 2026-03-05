import { IAuthForm } from "@/types/models";

export function login(data: IAuthForm) {
    return fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include"
    })
}