import { FiUser, FiCreditCard, FiLogOut } from "react-icons/fi";
import { RiSettings5Fill } from "react-icons/ri";
import { LuShieldOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { icon: <FiUser />, label: "Şəxsi məlumatlar", route: "/profile" },
  { icon: <RiSettings5Fill />, label: "Hesab ayarları", route: "/profile/settings" },
  { icon: <LuShieldOff />, label: "Təhlükəsizlik parametrləri", route: "/profile/security" },
  { icon: <FiCreditCard />, label: "Ödəniş tarixçəsi", route: "/profile/payment-history" },
  { icon: <FiLogOut />, label: "Çıxış", route: "/logout" }
];

const ProfileSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="text-white flex flex-col gap-4 pr-28">
      {menuItems.map((item, index) => {
        let isActive = false;
        if (item.route !== "/logout") {
          if (item.route === "/profile") {
            isActive = path === "/profile";
          } else {
            isActive = path.startsWith(item.route);
          }
        }

        if (item.route === "/logout") {
          return (
            <button
              key={index}
              onClick={handleLogout}
              className="flex items-center gap-2 text-xl font-medium text-white hover:text-[#3460DC] transition-all delay-75 whitespace-nowrap text-left cursor-pointer"
            >
              {item.icon}
              {item.label}
            </button>
          );
        }

        return (
          <Link
            key={index}
            to={item.route}
            className={`flex items-center gap-2 text-xl font-medium transition-all delay-75 whitespace-nowrap ${
              isActive ? "text-[#3460DC]" : "text-white hover:text-[#3460DC]"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileSidebar;

