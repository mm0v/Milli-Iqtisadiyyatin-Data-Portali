import AccountSettingsNav from "@/components/AccountSettingsNav";
import { Outlet } from "react-router-dom";

const ProfileSettings = () => {
  return (
    <div className="w-full">
      <AccountSettingsNav />
      <Outlet />
    </div>
  );
};

export default ProfileSettings;
