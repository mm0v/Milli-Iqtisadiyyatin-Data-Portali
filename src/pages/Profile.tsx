import ProfileSidebar from "@/components/ProfileSidebar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <section>
      <div className="fixed inset-0 -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="./about/bg-about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex pt-14 px-8">
        <ProfileSidebar />

        <div className="flex-1 pl-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Profile;
