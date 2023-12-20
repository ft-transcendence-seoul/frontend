import { api } from "@/api/network";

function testLogin(id: number) {
  return api.get(`/auth/login/user${id}@example.com`);
}
export { testLogin };
