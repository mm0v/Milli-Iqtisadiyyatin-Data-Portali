import { FiUser, FiCreditCard, FiLogOut, FiX } from "react-icons/fi";
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

interface ProfileSidebarProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ isOpen, togglePanel }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div 
        className={`
          fixed lg:hidden top-0 left-0 w-full h-full  bg-[rgba(29,7,22,0.5)] bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
        onClick={togglePanel}
      />
      
     <aside className={`fixed top-20 left-0 h-full w-64 bg-[#180718] z-50 shadow-xl transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:shadow-none lg:bg-transparent
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
         <div className="p-4 flex justify-end">
          <FiX 
            size={24} 
            onClick={togglePanel} 
            className="lg:hidden text-white mt-5 cursor-pointer hover:text-red-400 transition-colors" 
          />
        </div>
        
        <div className="px-6 space-y-6">
          {menuItems.map((item, index) => {
            const isActive =
              item.route !== "/logout" &&
              (item.route === "/profile"
                ? path === "/profile"
                : path.startsWith(item.route));

            if (item.route === "/logout") {
              return (
                <button
                  key={index}
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-lg font-medium text-white hover:text-red-400 transition-all duration-200 w-full text-left"
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
                className={`flex items-center gap-3 text-lg font-medium transition-all duration-200 ${isActive ? "text-[#3460DC]" : "text-gray-200 hover:text-[#3460DC]"}`}
                onClick={togglePanel}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;