import { FaEye, FaEyeSlash } from "react-icons/fa"

interface PasswordInputProps {
    label: string,
    value: boolean,
    setValue: (val: boolean) => void;
}


const PasswordInput = ({ label, value, setValue } : PasswordInputProps) => {
    return (
        <div className="w-full lg:w-[550px]">
            <label className="block text-lg mb-1.5 ">{label}</label>
            <div className="relative">
                <input type={value ? "text" : "password"} className="w-full relative px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                <button type="button" onClick={() => setValue(!value)} className="absolute right-2 top-3 text-xl text-[#585760] cursor-pointer">{value ? <FaEyeSlash /> : <FaEye />}</button>

            </div>
        </div>
            )
}

export default PasswordInput