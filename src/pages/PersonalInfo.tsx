
import ProfileButton from "@/components/ProfileButton"
import profilePhoto from "../../public/profile/profilephoto.svg"


const PersonalInfo = () => {
    return (
        <section className="flex flex-col" >
            <h3 className="text-white text-center lg:text-start text-4xl font-semibold">Şəxsi məlumatlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 px-4 md:px-10 w-full py-8 md:py-11 pb-[100px] md:pb-[310px] mt-5 md:mt-9 rounded-2xl gap-6 md:gap-20 bg-[#0706186E]">
                <div className="md:col-span-5 lg:col-span-1 flex flex-col items-center">
                    <img src={profilePhoto} alt="" className="w-full h-full md:w-40 md:h-40 object-contain rounded-full" />
                    <div className="w-full md:w-24 flex flex-col items-center mt-4">
                        <label className="block text-white mb-1.5">User ID</label>
                        <input
                            disabled
                            placeholder="25367YT"
                            className="w-full max-w-xs md:w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 placeholder-[#666666] text-center"
                        />
                    </div>
                </div>
                <form className="md:col-span-5 lg:col-span-4 text-white grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center gap-4 md:gap-6">
                    <div className="w-full">
                        <label className="block text-sm mb-1.5">Ad</label>
                        <input disabled className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb-1">Soyad</label>
                        <input disabled className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb-1">E-mail</label>
                        <input className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb-1">Nömrə</label>
                        <div className="flex items-center gap-2">
                            <input
                                className="flex-1 px-4 py-2 rounded-md bg-transparent border border-gray-600"
                                type="tel"
                                placeholder="+994 XX XXX XX XX"
                                pattern="^\+994(50|51|55|70|77|99)\d{7}$"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb-1">İş Yeri</label>
                        <input className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb-1">Vəzifə</label>
                        <input className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                    </div>
                    <div className="md:col-span-2 w-full">
                        <ProfileButton value="Yadda Saxla" width="w-full" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default PersonalInfo