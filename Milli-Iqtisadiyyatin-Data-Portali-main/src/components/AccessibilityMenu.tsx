import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface AccessibilityMenuProps {
    onDarkModeChange?: (enabled: boolean) => void;
    onVoiceAccessChange?: (enabled: boolean) => void;
    onMagnifierChange?: (enabled: boolean) => void;
    onLanguageChange?: (language: string) => void;
}

const AccessibilityMenu = ({
    onDarkModeChange,
    onVoiceAccessChange,
    onMagnifierChange,
    onLanguageChange
}: AccessibilityMenuProps) => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isVoiceAccess, setIsVoiceAccess] = useState(false);
    const [isMagnifier, setIsMagnifier] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'az');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleDarkModeToggle = () => {
        const newValue = !isDarkMode;
        setIsDarkMode(newValue);
        if (onDarkModeChange) {
            onDarkModeChange(newValue);
        }
        if (newValue) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    };

    const handleVoiceAccessToggle = () => {
        const newValue = !isVoiceAccess;
        setIsVoiceAccess(newValue);
        if (onVoiceAccessChange) {
            onVoiceAccessChange(newValue);
        }
    };

    const handleMagnifierToggle = () => {
        const newValue = !isMagnifier;
        setIsMagnifier(newValue);
        if (onMagnifierChange) {
            onMagnifierChange(newValue);
        }
    };

    const handleLanguageChange = (language: string) => {
        setCurrentLanguage(language);
        i18n.changeLanguage(language);
        if (onLanguageChange) {
            onLanguageChange(language);
        }
    };

    return (
        <div className="fixed bottom-20 right-5 flex flex-col items-end z-50">
            {/* Accessibility menu */}
            {isOpen && (
                <div className="bg-[#050412] text-white rounded-lg shadow-lg mb-4 w-72 overflow-hidden">
                    <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="w-8 h-8 text-white flex items-center justify-center mr-2">
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                                    <path d="M12 1c-4.42 0-8 3.58-8 8 0 2.95 1.6 5.54 4 6.92v4.58c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-4.58c2.4-1.38 4-3.97 4-6.92 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                                    <circle cx="12" cy="7" r="2" />
                                    <path d="M10 14h4v4h-4z" />
                                </svg>
                            </div>
                            <span className="font-bold text-lg">{t('accessibility.menuTitle')}</span>
                        </div>
                        <button onClick={toggleMenu} className="text-white hover:text-gray-200">
                            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-4 space-y-4">
                        {/* Dark Mode Toggle */}
                        <div className="flex justify-between items-center">
                            <span>{t('accessibility.darkMode')}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isDarkMode}
                                    onChange={handleDarkModeToggle}
                                />
                                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>

                        {/* Language Selector */}
                        <div className="flex justify-between items-center">
                            <span>{t('accessibility.language')}</span>
                            <select
                                value={currentLanguage}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                className="bg-gray-800 text-white rounded-md border border-gray-700 p-1 pl-2"
                            >
                                <option value="az">Azərbaycan</option>
                                <option value="en">English</option>
                                <option value="ru">Русский</option>
                            </select>
                        </div>

                        {/* Voice Access Toggle */}
                        <div className="flex justify-between items-center">
                            <span>{t('accessibility.voiceAccess')}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isVoiceAccess}
                                    onChange={handleVoiceAccessToggle}
                                />
                                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>

                        {/* Magnifier Toggle */}
                        <div className="flex justify-between items-center">
                            <span>{t('accessibility.magnifier')}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isMagnifier}
                                    onChange={handleMagnifierToggle}
                                />
                                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Accessibility icon button */}
            <button
                onClick={toggleMenu}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
            >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM8 8h8v1a1 1 0 01-1 1h-1v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7H9a1 1 0 01-1-1V8z" />
                    <path d="M17 17v1a1 1 0 01-1 1H8a1 1 0 01-1-1v-1" />
                </svg>
            </button>
        </div>
    );
};

export default AccessibilityMenu;