import { api } from "@/api/network";
import { OtherUserAbstract } from "@/users/index";
import { AxiosResponse } from "axios";

async function getBlockList(): Promise<AxiosResponse<OtherUserAbstract[]>> {
  return api.get("/user-relation/block");
}

async function postBlock(user_id: number) {
  return api.post(`/user-relation/block/${user_id}`, {});
}

async function deleteBlock(user_id: number) {
  return api.delete(`/user-relation/block/${user_id}`);
}

export { getBlockList, postBlock, deleteBlock };
