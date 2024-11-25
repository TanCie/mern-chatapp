import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, isLast, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:text-gray-200 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-gray-500" : ""
        } `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-300"> {conversation.fullName} </p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!isLast && <div className="my-0 py-0 h-1 divider" />}
    </>
  );
};

export default Conversation;
