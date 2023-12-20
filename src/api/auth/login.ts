import { api } from "@/api/network";
import { AxiosResponse } from "axios";

export function login(uri: string): Promise<AxiosResponse<{ data: string }>> {
  return api.get(`/auth/sign-in?callback_uri=${uri}`);
}

export function logout(): Promise<AxiosResponse> {
  return api.post("/auth/logout", {});
}

export function userRedirect(
  code: string,
  state: string,
  uri: string
): Promise<
  AxiosResponse<{ session?: string; redirect: "home" | "register" | "2FA" }>
> {
  return api.get(
    `/auth/user-redirect?code=${code}&state=${state}&callback_uri=${uri}`
  );
}

export function register(
  nickname: string,
  file: File | null
): Promise<AxiosResponse<{ session?: string }>> {
  if (file !== null) {
    const formData = new FormData();
    formData.append("files", file);
    return api.post(
      "/auth/register",
      { nickname, formData },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
  return api.post("/auth/register", { nickname });
}
