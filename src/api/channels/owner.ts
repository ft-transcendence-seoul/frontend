import axios from "axios";

async function delegateOwner(channel_id: number, user_id: number) {
  return axios.put(`/channels/${channel_id}/owner/${user_id}`);
}

export { delegateOwner };
