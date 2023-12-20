import { api } from "@/api/network";
import { AxiosResponse } from "axios";
import { Channel, MemberAbstract } from ".";

interface Info {
  //...변수명...?
  user: MemberAbstract;
  channel: Channel;
}

async function inviteUser(
  channel_id: number,
  user_id: number
): Promise<AxiosResponse<Info>> {
  return api.post(`/channels/${channel_id}/invite/${user_id}`, {});
}

async function acceptInvite(channel_id: number) {
  return api.post(`/channels/${channel_id}/accept-invite`, {});
}

async function rejectInvite(channel_id: number) {
  return api.post(`/channels/${channel_id}/refuse-invite`, {});
}

async function kickMember(channel_id: number, user_id: number) {
  return api.delete(`/channels/${channel_id}/kick/${user_id}`);
}

async function getBanMemberList(
  channel_id: number
): Promise<AxiosResponse<MemberAbstract[]>> {
  return api.get(`/channels/${channel_id}/ban`);
}

async function banMember(channel_id: number, user_id: number) {
  return api.post(`/channels/${channel_id}/ban/${user_id}`, {});
}

async function removeBanMember(channel_id: number, user_id: number) {
  return api.delete(`/channels/${channel_id}/ban/${user_id}`);
}

async function muteMember(channel_id: number, user_id: number) {
  return api.post(`/channels/${channel_id}/mute/${user_id}`, {});
}

export {
  inviteUser,
  acceptInvite,
  rejectInvite,
  kickMember,
  getBanMemberList,
  banMember,
  removeBanMember,
  muteMember,
};
