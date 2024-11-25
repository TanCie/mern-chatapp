import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutBtn = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto pt-4">
      {!loading ? (
        <BiLogOut
          className="w-8 h-8 cursor-pointer text-gray-200"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutBtn;
