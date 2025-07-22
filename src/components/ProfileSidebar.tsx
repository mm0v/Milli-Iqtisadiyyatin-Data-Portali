import { FiUser, FiCreditCard, FiLogOut } from "react-icons/fi";
import { RiSettings5Fill } from "react-icons/ri";
import { LuShieldOff } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: <FiUser />, label: "Şəxsi məlumatlar", route: "/profile" },
  { icon: <RiSettings5Fill />, label: "Hesab ayarları", route: "/profile_settings" },
  { icon: <LuShieldOff />, label: "Təhlükəsizlik parametrləri", route: "/security_settings" },
  { icon: <FiCreditCard />, label: "Ödəniş tarixçəsi", route: "/payments" },
  { icon: <FiLogOut />, label: "Çıxış" }
]


const ProfileSidebar = () => {

  const location = useLocation();
  const path = location.pathname;


  return (
    <div className="text-white flex flex-col gap-4 pr-28">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.route}
          className={`flex items-center gap-2 text-xl font-medium transition-all delay-75 whitespace-nowrap ${path === item.route ? "text-[#3460DC]" : "text-white hover:text-[#3460DC]"
            }`}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default ProfileSidebar