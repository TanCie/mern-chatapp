import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authuser } = useAuthContext();

  useEffect(() => {
    if (authuser) {
      const newSocket = io("https://tancie-chatapp.onrender.com", {
        query: {
          userId: authuser._id,
        },
      });

      setSocket(newSocket);
      //used to listen to events, can be both used by client and server
      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => newSocket.close();
    }
    if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [authuser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
