import { Conversations } from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="px-3 divider"></div>
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
