import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search here.."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-gray-500 text-white">
        <IoSearchSharp className="w-6 h-6" />
      </button>
    </form>
  );
}