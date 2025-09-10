import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from "lucide-react";

const ContactForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { planId } = location.state || {};

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        fatherName: "",
        number: "",
        applyType: "",
        applyText: "",
        messageType: "",
        eAddress: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as any;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const [formCompleted, setFormCompleted] = useState(false);

    const handleForm = () => {
        localStorage.setItem("currentPlanId", planId);
        setFormCompleted(true);
    };

    return (
        <div className="md:w-[90%] min-h-screen text-white p-6 relative overflow-x-hidden">
            <div className="flex justify-end min-h-screen">
                <div className="w-full max-w-[800px] flex flex-col px-4">
                    <div className={`bg-[#070618CC]/85 p-8 sm:p-16 rounded-xl space-y-6 ${formCompleted ? "max-w-[600px] mx-auto" : ""}`}>
                        {!formCompleted ? (
                            <>
                                <h1 className="text-2xl sm:text-3xl font-medium text-center text-[#F9F9F9]">
                                    Əlaqə Forması
                                </h1>

                                <div className="w-full max-w-full sm:max-w-[700px] mx-auto">

                                    {/* Name */}
                                    <div className="mb-6">
                                        <label className="block text-[#F9F9F9] text-sm mb-2">Ad</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                                        />
                                    </div>

                                    {/* Surname */}
                                    <div className="mb-6">
                                        <label className="block text-[#F9F9F9] text-sm mb-2">Soyad</label>
                                        <input
                                            type="text"
                                            name="surname"
                                            value={formData.surname}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                                        />
                                    </div>

                                    {/* Father Name */}
                                    <div className="mb-6">
                                        <label className="block text-[#F9F9F9] text-sm mb-2">Ata adı</label>
                                        <input
                                            type="text"
                                            name="fatherName"
                                            value={formData.fatherName}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                                        />
                                    </div>

                                    {/* Number */}
                                    <div className="mb-6">
                                        <label className="block text-[#F9F9F9] text-sm mb-2">Nömrə</label>
                                        <input
                                            type="text"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                                        />
                                    </div>

                                    {/* E-address Type (Dropdown) */}
                                    <div className="mb-6">
                                        <label className="block text-[#F9F9F9] text-sm mb-2">E-ünvan</label>
                                        <Listbox value={formData.eAddress} onChange={value => setFormData(prev => ({ ...prev, eAddress: value }))}>
                                            {({ open }) => (
                                                <div className="w-full border border-[#66666659] rounded-md bg-transparent overflow-hidden transition-all duration-300">
                                                    {/* Button */}
                                                    <Listbox.Button className="w-full p-3 text-white text-left text-sm flex justify-between items-center">
                                                        {formData.eAddress || "Seçin"}
                                                        <ChevronDownIcon
                                                            className={`w-5 h-5 text-white transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                                                        />
                                                    </Listbox.Button>

                                                    {/* Options */}
                                                    <div
                                                        className={`transition-all duration-300 ease-in-out ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                                                    >
                                                        <Listbox.Options className="w-full overflow-auto text-white text-sm">
                                                            {["Təklif", "Ərizə", "Şikayət"].map(option => (
                                                                <Listbox.Option
                                                                    key={option}
                                                                    value={option}
                                                                    className={({ active, selected }) =>
                                                                        `cursor-pointer select-none px-3 py-2 ${active ? "bg-[#3460DC]/20" : ""} ${selected ? "bg-[#3460DC]/30 font-medium" : ""}`
                                                                    }
                                                                >
                                                                    {option}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </div>
                                                </div>
                                            )}
                                        </Listbox>
                                    </div>



                                    {/* Apply Type */}
                                    <div className="mb-6">
                                        <label className="block text-[#F9F9F9] text-sm mb-2">Müraciət növü</label>
                                        <input
                                            type="text"
                                            name="applyType"
                                            value={formData.applyType}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                                        />
                                    </div>

                                    {/* Apply Text */}
                                    <div className="mb-6">
                                        <label className="block text-[#F9F9F9] text-sm mb-2">Müraciət mətni</label>
                                        <textarea
                                            name="applyText"
                                            value={formData.applyText}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex space-x-4 mt-6">
                                        <button
                                            onClick={handleForm}
                                            className="w-full bg-[#3460DC] hover:bg-[#2a50ba] text-white py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
                                        >
                                            Müraciət etmək
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="text-center space-y-10">
                                <h1 className="text-3xl font-medium">Müraciətiniz qeydə alındı</h1>

                                <div className="flex justify-center">
                                    <img src="/click.svg" alt="Confirmation checkmark" className="w-20 h-20 mx-auto mt-2" />
                                </div>

                                <button
                                    onClick={() => navigate("/contact")}
                                    className="w-full bg-[#3460DC] hover:bg-[#2a50ba] text-white py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
                                >
                                    Bağla
                                </button>
                            </div>
                        )}
                    </div>
                    <div className={`flex-1 ${formCompleted ? "mb-12" : "mb-4"}`}></div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
