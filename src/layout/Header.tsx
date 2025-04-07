import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import i18n from '@/utils/i18n/i18n';
import "../../src/assets/sass/header.scss";
import { Input } from '@mui/material';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('az'); // Default dil Azərbaycan

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };


    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = e.target.value;
        setSelectedLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };



    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 1000);
    };

    useEffect(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        document.body.style.overflow = isMobileNavOpen ? 'auto' : 'hidden';
    };

    return (
        <header className='header'>
            {/* Desktop Header */}
            {!isMobile && (
                <div className="desktop-header">
                    <div className="header-content">
                        <div>
                            <Link to={"/"}>
                                <img src="/logo.svg" alt="Logo" className="logo" />
                            </Link>
                        </div>

                        <div className="relative flex items-center group">
                            <Input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder={i18n.t('search')}
                                aria-label="Search"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border-none bg-white/5 text-white placeholder:text-white/60
                                 transition-all duration-200
                                 hover:bg-white/10 focus:bg-white/10
                                [&>input]:text-white"
                                style={{ color: 'white' }}
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 
                      text-white/60 group-hover:text-white 
                      transition-colors duration-200 " />
                        </div>

                        <div className="header-actions">
                            <div className="mr-3 rounded-2xl bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900">
                                <div className="relative">
                                    <select
                                        value={selectedLanguage}
                                        onChange={handleLanguageChange}
                                        aria-label="Select language"
                                        className="w-full cursor-pointer appearance-none border-none bg-transparent py-2 pl-4 pr-8 text-base font-medium text-white outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
                                    >
                                        <option value="az" className="bg-gray-800 text-white">
                                            {i18n.t('AZE')}
                                        </option>
                                        <option value="en" className="bg-gray-800 text-white">
                                            {i18n.t('ENG')}
                                        </option>
                                        <option value="ru" className="bg-gray-800 text-white">
                                            {i18n.t('RU')}
                                        </option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white/60"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to={"/login"}>
                                    <Button className="login-btn cursor-pointer">{i18n.t('login')}</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Header */}
            {isMobile && (
                <>
                    <div className="mobile-header">
                        <div>
                            <Link to={"/"}>
                                <img src="/logo.svg" alt="Logo" className="logo" />
                            </Link>
                        </div>
                        <button className="menu-icon" onClick={toggleMobileNav}>
                            {isMobileNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    <div className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
                        <nav className="nav-content">
                            <Link to="/" onClick={toggleMobileNav} className={location.pathname === "/" ? "active" : ""}>
                                {i18n.t('Ana Səhifə')}
                            </Link>
                            <Link to="/about" onClick={toggleMobileNav} className={location.pathname === "/about" ? "active" : ""}>
                                {i18n.t('Haqqımızda')}
                            </Link>
                            <Link to="/analytics" onClick={toggleMobileNav} className={location.pathname === "/analytics" ? "active" : ""}>
                                {i18n.t('Analitika')}
                            </Link>
                            <Link to="/report" onClick={toggleMobileNav} className={location.pathname === "/report" ? "active" : ""}>
                                {i18n.t('Araşdırma və hesabatlar')}
                            </Link>
                            <Link to="/contact" onClick={toggleMobileNav} className={location.pathname === "/contact" ? "active" : ""}>
                                {i18n.t('Yardım və Dəstək')}
                            </Link>
                            <Button className="mobile-login-btn">{i18n.t('login')}</Button>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;