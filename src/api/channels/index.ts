import { api } from "@/api/network";
import { AxiosResponse } from "axios";

interface Channel {
  id: number;
  title: string;
  type: "public" | "protected" | "private";
}

async function getChannelList(): Promise<AxiosResponse<Channel[]>> {
  return api.get("/api/channels");
}

interface MemberAbstract {
  id: number;
  nickname: string;
}
interface MemberDetail extends MemberAbstract {
  role: "Owner" | "Admin" | "User";
}

interface SpecificChannel extends Channel {
  users: MemberDetail[];
}

async function getChannel(
  channel_id: number
): Promise<AxiosResponse<SpecificChannel>> {
  return api.get(`/api/channels/${channel_id}`);
}

interface Props {
  title: string;
  type: string;
  password?: string | null;
}

async function createChannel({ title, type, password }: Props) {
  return api.post("/api/channels", { title, type, password });
}

async function updateChannel(
  channel_id: number,
  { title, type, password }: Props
) {
  if (type === "protected" && password !== "")
    return api.put(`/api/channels/${channel_id}`, { title, type, password });
  return api.put(`/api/channels/${channel_id}`, { title, type });
}

async function joinChannel(channel_id: number, password: string) {
  if (password != "")
    return api.post(`/api/channels/${channel_id}`, {
      providedPassword: password,
    });
  return api.post(`/api/channels/${channel_id}`, {});
}

async function leaveChannel(channel_id: number) {
  return api.delete(`/api/channels/${channel_id}`);
}

interface MyChannel extends Channel {
  role: "Owner" | "Admin" | "User";
}

async function getMyChannels(): Promise<AxiosResponse<MyChannel[]>> {
  return api.get("/api/channels/me");
}

export type {
  Channel,
  MyChannel,
  SpecificChannel,
  MemberAbstract,
  MemberDetail,
};
export {
  getChannelList,
  getChannel,
  createChannel,
  updateChannel,
  joinChannel,
  leaveChannel,
  getMyChannels,
};
