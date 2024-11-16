import boy from "../../assets/boy.png";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="rounded-full w-10">
          <img src={boy} alt="chat bubble avatar" />
        </div>
      </div>

      <div className="chat-bubble text-white bg-sky-600">
        Hi! What is going on with you?
      </div>
      <div className="chat-footer opacity-70 text-xs flex gap-2 mt-1 items-center">
        20:02
      </div>
    </div>
  );
};

export default Message;
