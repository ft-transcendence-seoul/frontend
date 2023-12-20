import { api } from "@/api/network";
import { AxiosResponse } from "axios";

async function enterQueue(
  mode: "standard" | "extreme"
): Promise<AxiosResponse> {
  return api.post("/games/queue", { mode });
}

async function leaveQueue(): Promise<AxiosResponse> {
  return api.delete("/games/queue");
}

async function inviteGame(user_id: number): Promise<AxiosResponse> {
  return api.post(`/games/invite/${user_id}`, { mode: "standard" });
}

async function acceptGame(user_id: number): Promise<AxiosResponse> {
  return api.post(`/games/accept/${user_id}`, {});
}

async function rejectGame(user_id: number): Promise<AxiosResponse> {
  return api.delete(`/games/reject/${user_id}`, {});
}

export { enterQueue, leaveQueue, inviteGame, acceptGame, rejectGame };
