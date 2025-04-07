import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="bg-black text-white px-6 py-3 mt-4 rounded-lg">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
