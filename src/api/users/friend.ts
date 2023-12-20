import { OtherUserAbstract } from "@/api/users/index";
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
  return api.get("/api/user-relation/friends");
}

async function getFriendRelationList(): Promise<AxiosResponse<Friend[]>> {
  return api.get("/api/user-relation/friends/relations");
}

async function postRequestFriend(id: number): Promise<AxiosResponse> {
  return api.post(`/api/user-relation/friends/${id}/request`, {});
}

async function approveFriend(id: number): Promise<AxiosResponse> {
  return api.put(`/api/user-relation/friends/${id}/accept`, {});
}

async function denyFriend(id: number): Promise<AxiosResponse> {
  return api.delete(`/api/user-relation/friends/${id}/reject`);
}

async function deleteFriend(id: number): Promise<AxiosResponse> {
  return api.delete(`/api/user-relation/friends/${id}/disconnect`);
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
