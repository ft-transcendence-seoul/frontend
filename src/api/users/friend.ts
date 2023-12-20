import { OtherUserAbstract } from "@/users/index";
import { api } from "@/api/network";
import { AxiosResponse } from "axios";

interface Friend {
  otherUser: {
    id: number;
    nickname: string;
  };
  status: "friend" | "pendingApproval" | "friendRequest";
}

async function getFriendList(): Promise<AxiosResponse<OtherUserAbstract[]>> {
  return api.get("/user-relation/friends");
}

async function getFriendRelationList(): Promise<AxiosResponse<Friend[]>> {
  return api.get("/user-relation/friends/relations");
}

async function postRequestFriend(id: number): Promise<AxiosResponse> {
  return api.post(`/user-relation/friends/${id}/request`, {});
}

async function approveFriend(id: number): Promise<AxiosResponse> {
  return api.put(`/user-relation/friends/${id}/accept`, {});
}

async function denyFriend(id: number): Promise<AxiosResponse> {
  return api.delete(`/user-relation/friends/${id}/reject`);
}

async function deleteFriend(id: number): Promise<AxiosResponse> {
  return api.delete(`/user-relation/friends/${id}/disconnect`);
}

export {
  getFriendList,
  getFriendRelationList,
  postRequestFriend,
  approveFriend,
  denyFriend,
  deleteFriend,
};
export type { Friend };
