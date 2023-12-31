import { GameResult, GameInfo, GameStart } from "@/hooks/data/useGame";
import { Socket } from "socket.io-client";

function receiveGameStart(socket: Socket, callback: (res: GameStart) => void) {
  socket.on("game-start", (data: GameStart) => {
    console.log(data);
    callback(data);
  });
}

function receiveGameInfo(socket: Socket, callback: (res: GameInfo) => void) {
  socket.on("game-info", (data: GameInfo) => {
    console.log(data);
    callback(data);
  });
}

function receiveGameResult(
  socket: Socket,
  callback: (res: GameResult) => void
) {
  socket.on("game-result", (data: GameResult) => {
    console.log(data);
    callback(data);
  });
}
interface MoveBar {
  type: "keydown" | "keyup";
  key: KeyboardEvent["key"];
}
function sendMoveBar(socket: Socket, info: MoveBar) {
  socket.emit("move-bar", info);
}

export { receiveGameStart, receiveGameInfo, receiveGameResult, sendMoveBar };
