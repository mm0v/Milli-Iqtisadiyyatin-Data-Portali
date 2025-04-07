import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import "../../src/assets/sass/navbar.scss";

const Navbar = () => {
    const { t } = useTranslation(); // useTranslation() istifadə olunur
    const location = useLocation();

    return (
        <div className="navbar">
            <div className="p-6 flex items-center">
                <nav>
                    <div className="space-x-4 ">
                        <Link to={"/"}>
                            <p className="nav-link mt-3 text-white">{t('home')}</p>
                        </Link>
                        <Link to={"/about"}>
                            <p className={`nav-link mt-3 ${location.pathname === "/about" ? "text-blue-500" : "text-white"}`}>
                                {t('about')}
                            </p>
                        </Link>
                        <Link to={"/analytics"}>
                            <p className={`nav-link mt-3 ${location.pathname === "/analytics" ? "text-blue-500" : "text-white"}`}>
                                {t('analytics')}
                            </p>
                        </Link>
                        <Link to={"/report"}>
                            <p className={`nav-link mt-3 ${location.pathname === "/report" ? "text-blue-500" : "text-white"}`}>
                                {t('report')}
                            </p>
                        </Link>
                        <Link to={"/contact"}>
                            <p className={`nav-link mt-3 ${location.pathname === "/contact" ? "text-blue-500" : "text-white"}`}>
                                {t('help')}
                            </p>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
