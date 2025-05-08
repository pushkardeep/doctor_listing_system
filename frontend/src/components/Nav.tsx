import React from "react";

// Icons
import { Plus, ListFilter } from "lucide-react";

// Components
import CustomButton from "./common/CustomButton";

type NavProps = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav: React.FC<NavProps> = ({ setShowForm, setShowFilter }) => {
  return (
    <nav className="w-screen shadow-md px-6 py-4 flex items-center justify-between bg-white border border-zinc-200 rounded-2xl transition hover:shadow-lg duration-300">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-semibold text-zinc-800">Apollo</h1>

      {/* Buttons */}
      <div className="flex items-center gap-5">
        <CustomButton
          onClick={() => setShowForm(true)}
          label="Add Doctor"
          icon={Plus}
          iconColor="black"
          textClassName="text-black font-medium"
          className="border border-zinc-400 bg-white hover:bg-zinc-100 rounded-xl px-4 py-2 transition duration-200"
        />
        <CustomButton
          onClick={() => setShowFilter(true)}
          label="Filter"
          icon={ListFilter}
          iconColor="white"
          textClassName="text-white font-medium"
          className="bg-blue-600 hover:bg-blue-700 rounded-xl px-4 py-2 transition duration-200"
        />
      </div>
    </nav>
  );
};

export default Nav;
