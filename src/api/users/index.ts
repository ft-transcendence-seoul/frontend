import axios, { AxiosResponse } from "axios";

interface OtherUserAbstract {
  id: number;
  nickname: string;
}

interface UserAbstract {
  id: number;
  nickname: string;
  ladderPoint: number;
  avatarImgPath: string | null;
}
async function getUserList(): Promise<AxiosResponse<UserAbstract[]>> {
  return axios.get("/api/users");
}

interface UserDetail extends UserAbstract {
  email: string;
  bio: string | null;
  is2fa?: boolean;
  status?: "online" | "offline" | "ingame";
  matchHistorys?: {
    id: number;
    result: "loss" | "win" | "draw";
    userScore: number;
    opponentScore: number;
    lpChange: number;
    playedAt: string;
  }[];
}

async function getUserMe(): Promise<AxiosResponse<UserDetail>> {
  return axios.get("/api/users/me");
}

async function putUserMe(params: UserDetail): Promise<AxiosResponse> {
  return axios.put("/api/users/me", params);
}

async function putUserMeAvatar(avatar: File): Promise<AxiosResponse> {
  const formData = new FormData();
  formData.append("file", avatar);
  return axios.put("/api/users/me/avatar", formData);
}

async function getUser(id: number): Promise<AxiosResponse<UserDetail>> {
  return axios.get(`/api/users/${id}`);
}

export type { UserAbstract, UserDetail, OtherUserAbstract };
export { getUserList, getUserMe, putUserMe, getUser, putUserMeAvatar };
