import PasswordInput from "@/components/PasswordInput";
import { useState } from "react";
import { IoMdMail, IoIosPhonePortrait } from "react-icons/io";


const SecuritySettings = () => {

    const [showPasswordFirst, setShowPasswordFirst] = useState(false);
    const [showPasswordSecond, setShowPasswordSecond] = useState(false);
    const [showPasswordThird, setShowPasswordThird] = useState(false);

    return (
        <section className="flex flex-col" >
            <h3 className="text-white text-4xl font-semibold">Təhlükəsizlik</h3>
            <div className="grid grid-cols-1 px-6 md:px-12 w-full py-11  mt-9 rounded-2xl gap-5 bg-[#0706186E]">
                <h2 className="text-white font-bold text-xl">Şifrənizini yeniləyin</h2>
                <form className="text-white flex flex-col w-full lg:w-[550px] gap-4">
                    <PasswordInput label="Mövcud şifrə" value={showPasswordFirst} setValue={setShowPasswordFirst} />
                    <PasswordInput label="Yeni şifrə" value={showPasswordSecond} setValue={setShowPasswordSecond} />
                    <PasswordInput label="Şifrəni təsdiqləyin" value={showPasswordThird} setValue={setShowPasswordThird} />
                    <button className="w-full py-3 font-medium mt-5 text-xl rounded-md bg-blue-500 cursor-pointer">Yadda saxla</button>
                </form>

                <div className="bottom-inputs flex flex-col gap-10 mt-24">
                    <div className=" flex flex-col gap-4 w-full lg:w-[345px]">
                        <label className="text-lg text-white font-semibold">Bərpa üçün e-poçt ünvanı əlavə edin.</label>
                        <div className="relative">
                            <input type="text" className="w-full relative px-4 py-2 rounded-md bg-transparent border text-[#585760] border-gray-600" placeholder="Enter your email address" />
                            <IoMdMail className="absolute right-2 top-3 text-xl text-[#585760]" />
                        </div>
                    </div>


                    <div className=" flex flex-col gap-4 w-full lg:w-[345px]">
                        <label className="text-lg text-white font-semibold">Bərpa üçün telefon nömrəsi  əlavə edin.</label>
                        <div className="relative">
                            <input type="text" className="w-full relative px-4 py-2 rounded-md bg-transparent border text-[#585760] border-gray-600" placeholder="Enter your phone number" />
                            <IoIosPhonePortrait className="absolute right-1 top-2 text-2xl text-[#585760]" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SecuritySettings