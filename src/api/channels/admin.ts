import { api } from "@/api/network";
import { AxiosResponse } from "axios";

async function giveAdmin(channel_id: number, user_id: number) {
  return api.put(`/api/channels/${channel_id}/admin/${user_id}/give`, {});
}

async function depriveAdmin(channel_id: number, user_id: number) {
  return api.put(`/api/channels/${channel_id}/admin/${user_id}/deprive`, {});
}

export { giveAdmin, depriveAdmin };
