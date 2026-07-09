import { io } from "socket.io-client";



const socket = io("https://localhost:5000/", {
  transports: ["websocket"],
  autoConnect: true
});

export default socket;
