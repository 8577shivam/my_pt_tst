import React from "react";
import LogogIcon from "../Assets/Logo.png";
import SettingIcon from "../Assets/setting.svg";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between border-b-[2px] px-4 py-4 mb-3">
      <div>
        <img src={LogogIcon} alt="logo" />
      </div>
      <div>
        <img src={SettingIcon} alt="settings" />
      </div>
    </div>
  );
};

export default Navbar;
