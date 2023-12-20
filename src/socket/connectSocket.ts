import { io } from "socket.io-client";

function connectSocket() {
  console.log("connectSocket");

  const uri =
    "https://ec2-15-164-74-198.ap-northeast-2.compute.amazonaws.com:3000/";

  const socket = io(uri, {
    withCredentials: true,
  });

  return socket;
}

export default connectSocket;
