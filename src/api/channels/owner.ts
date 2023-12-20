import { api } from "@/api/network";
import { AxiosResponse } from "axios";

async function delegateOwner(channel_id: number, user_id: number) {
  return api.put(`/api/channels/${channel_id}/owner/${user_id}`, {});
}

export { delegateOwner };
