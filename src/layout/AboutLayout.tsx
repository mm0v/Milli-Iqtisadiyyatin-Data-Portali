import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from "react-router-dom";
import AboutFooter from "./AboutFooter";

const links = [
  { to: "/about", label: "aboutUs" },
  { to: "/about/purpose", label: "about.goal.title" },
  { to: "/about/mission", label: "about.mission.title" },
];

export default function AboutLayout() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="video-background">
        <BackgroundVideo videoSrc="/about/bg-about.mp4" />
      </div>

      <div className="flex justify-between mt-20 ml-8 ">
        <div className="text-lg poppins none lg:inline-flex lg:flex-col lg:items-start font-medium w-fit">
          {links.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `inline-block ${i === 0 ? "ml-0" : "ml-4"} mt-2 ${
                  isActive ? "text-[#3460DC]" : "text-white"
                }`
              }
            >
              {t(label)}
            </NavLink>
          ))}
        </div>

        <div className="pe-8 w-[827px]">
          <Outlet />
        </div>
      </div>

      <div>
        <AboutFooter />
      </div>
    </div>
  );
}
