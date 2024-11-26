import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authuser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authuser._id;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authuser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-sky-600" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="rounded-full w-10">
          <img src={profilePic} alt="chat bubble avatar" />
        </div>
      </div>

      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-70 text-xs flex gap-2 pb-2 mt-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
