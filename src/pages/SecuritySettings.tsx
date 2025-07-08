import PasswordInput from "@/components/PasswordInput";
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";
import { IoMdMail } from "react-icons/io";


const SecuritySettings = () => {

    const [showPasswordFirst, setShowPasswordFirst] = useState(false);
    const [showPasswordSecond, setShowPasswordSecond] = useState(false);
    const [showPasswordThird, setShowPasswordThird] = useState(false);

  return (
     <section className="flex flex-col" >
                <h3 className="text-white text-4xl font-semibold">Təhlükəsizlik</h3>
                <div className="flex flex-col px-24 w-full py-11 pb-[310px] mt-9 rounded-2xl gap-5 bg-[rgba(7,6,24,0.7)]">
                    <h2 className="text-white font-bold text-xl">Şifrənizini yeniləyin</h2>
                    <form className="text-white flex flex-col w-full max-w-[595px] gap-4">
                       <PasswordInput label="Mövcud şifrə" value={showPasswordFirst} setValue={setShowPasswordFirst}/>
                       <PasswordInput label="Yeni şifrə" value={showPasswordSecond} setValue={setShowPasswordSecond}/>
                       <PasswordInput label="Şifrəni təsdiqləyin" value={showPasswordThird} setValue={setShowPasswordThird}/>
                        <button className="w-full py-3 font-medium mt-5 text-xl rounded-md bg-blue-500 cursor-pointer">Yadda saxla</button>
                    </form>

                    <div className="bottom-inputs">
                        <div className="bg-red-500 gap-4">
                            <label>Bərpa üçün e-poçt ünvanı əlavə edin.</label>
                            <div className="relative">
                                <input type="text" placeholder="Enter your email address" />
                                <button><IoMdMail/></button>
                            </div>
                        </div>

                        <div className="bg-yellow-500">
                        </div>
                    </div>

                </div>
            </section>
  )
}

export default SecuritySettings