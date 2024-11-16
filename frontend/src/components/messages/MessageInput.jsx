import { GrSend } from "react-icons/gr";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <GrSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
