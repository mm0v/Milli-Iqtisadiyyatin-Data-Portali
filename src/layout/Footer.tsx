import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from "react-i18next"; // useTranslation hook'unu import edin
import "../../src/assets/sass/footer.scss";

const Footer = () => {
    const { t } = useTranslation(); // useTranslation hook'unu kullanarak t fonksiyonunu alıyoruz

    return (
        <div className="footer-container backdrop-blur-xl p-6 md:p-10 lg:p-20 rounded-2xl border border-zinc-700 lg:mt-16">
            <div className="container mx-auto">
                <div className="footer-content flex flex-col">
                    {/* Navigation Links */}
                    <div className="md:mb-12">
                        <nav className="footer-nav">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                                <div className="col-span-2 flex flex-col footer-about">
                                    <Link to={"/about"} className="text-gray-300 text-xl mb-3 md:mb-4 hover:text-blue-600 transition-colors">
                                        {t('aboutUs')} {/* t() fonksiyonu ile çeviri yapılır */}
                                    </Link>
                                    <Link to={"/contact"} className="text-gray-300 text-xl hover:text-blue-600 transition-colors">
                                        {t('contact')} {/* t() fonksiyonu ile çeviri yapılır */}
                                    </Link>
                                </div>
                                <div className="col-span-2 flex flex-col footer-about">
                                    <Link to={"/terms"} className="text-gray-300 text-xl mb-3 md:mb-4 hover:text-blue-600 transition-colors">
                                        {t('terms')} {/* t() fonksiyonu ile çeviri yapılır */}
                                    </Link>
                                    <Link to={"/privacy"} className="text-gray-300 text-xl hover:text-blue-600 transition-colors">
                                        {t('privacy')} {/* t() fonksiyonu ile çeviri yapılır */}
                                    </Link>
                                </div>
                                {/* Add empty divs to fill the grid on larger screens */}
                                <div className="hidden md:block col-span-1 md:col-span-2 lg:col-span-4"></div>
                            </div>
                        </nav>
                    </div>

                    {/* Footer Info Section */}
                    <div className="footer-info">
                        <div className="flex flex-col md:flex-row footer-info-inside items-center justify-between gap-6 md:gap-0">
                            {/* Logo */}
                            <div className="footer-logo order-2 md:order-1">
                                <Link to="/">
                                    <img src="/logo.svg" alt="4SIM" className="h-10 md:h-12" />
                                </Link>
                            </div>

                            {/* Copyright */}
                            <div className="footer-copyright order-1 md:order-2 text-center md:text-left">
                                <p className="text-white text-sm md:text-md">
                                    Data Portal @ {new Date().getFullYear()} All rights reserved
                                </p>
                            </div>

                            {/* Social media icons */}
                            <div className="footer-social order-3 flex space-x-4 md:space-x-6">
                                <a
                                    href="https://www.facebook.com/4sim.gov.az"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon text-white hover:text-[#145DBF] transition duration-300"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon fontSize="medium" />
                                </a>
                                <a
                                    href="https://www.instagram.com/c4ir_azerbaijan/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon text-white hover:text-[#145DBF] transition duration-300"
                                    aria-label="Instagram"
                                >
                                    <InstagramIcon fontSize="medium" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/4simgovaz/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon text-white hover:text-[#145DBF] transition duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon fontSize="medium" />
                                </a>
                                <a
                                    href="/rss"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon text-white hover:text-[#145DBF] transition duration-300"
                                    aria-label="RSS Feed"
                                >
                                    <LanguageIcon fontSize="medium" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive CSS */}
            <style>{`
                @media (max-width: 768px) {
                    .footer-nav {
                        margin-bottom: 2rem;
                    }
                    
                    .footer-info {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .footer-copyright {
                        margin: 1rem 0;
                        text-align: center;
                    }
                    
                    .footer-social {
                        margin-top: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Footer;
