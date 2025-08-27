import { useState } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(prev => !prev);

  return (
    <section>
      <div className="video-background">
        <BackgroundVideo videoSrc="/about/bg-about.mp4" />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14 px-8 relative">
        <FiMenu size={24} className="flex lg:hidden text-white cursor-pointer" onClick={togglePanel} />

        <ProfileSidebar isOpen={isOpen} togglePanel={togglePanel} />

        <div className="flex-1 pl-0 lg:pl-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Profile;
