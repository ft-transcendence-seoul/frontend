import { api } from "@/api/network";
import { OtherUserAbstract } from "@/api/users/index";
import { AxiosResponse } from "axios";

async function getBlockList(): Promise<AxiosResponse<OtherUserAbstract[]>> {
  return api.get("/api/user-relation/block");
}

async function postBlock(user_id: number) {
  return api.post(`/api/user-relation/block/${user_id}`, {});
}

async function deleteBlock(user_id: number) {
  return api.delete(`/api/user-relation/block/${user_id}`);
}

export { getBlockList, postBlock, deleteBlock };
