import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5'; // You'll need to install react-icons if not already installed

interface PopupProps {
    isOpen: boolean;
    onClose?: () => void;
    onLogin: () => void;
    onRegister: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onLogin, onRegister }) => {
    const [countdown, setCountdown] = useState(5)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isOpen) return;

        setCountdown(5);

        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(timer);
                    if (onClose) {
                        onClose();
                    } else {
                        navigate('/');
                    }
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1200);

        return () => clearInterval(timer);
    }, [isOpen, navigate, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl relative">
                {/* Close icon in the top-right corner */}
                {onClose && (
                    // <Link to={"/"}>
                    <button
                        onClick={onClose}
                        className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
                        aria-label="Close"
                    >
                        <IoClose size={24} />
                    </button>
                    // </Link>
                )}

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-4">Xoş Gəlmisiniz !</h2>
                    <p className="text-gray-600">Bu məlumata giriş üçün sizin hesabınız olmalıdır !</p>
                    <p className="text-red-500 mt-2">
                        {countdown} saniyə sonra əsas səhifəyə yönləndiriləcəksiniz
                    </p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <Link to="/login" className="w-full">
                        <button
                            onClick={onLogin}
                            className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium transition-colors w-full"
                        >
                            Daxil Ol
                        </button>
                    </Link>

                    <Link to="/register" className="w-full">
                        <button
                            onClick={onRegister}
                            className="bg-green-500 cursor-pointer hover:bg-green-600 text-white py-2 px-4 rounded-md font-medium transition-colors w-full"
                        >
                            Qeydiyyatdan Keç
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Popup;