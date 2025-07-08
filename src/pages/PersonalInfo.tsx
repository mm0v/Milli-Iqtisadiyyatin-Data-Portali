
    import ProfileButton from "@/components/ProfileButton"
import profilePhoto from "../../public/profile/profilephoto.svg"


    const PersonalInfo = () => {
        return (
            <section className="flex flex-col" >
                <h3 className="text-white text-4xl font-semibold">Şəxsi məlumatlar</h3>
                <div className="flex px-24 w-full py-11 pb-[310px] mt-9 rounded-2xl gap-20  bg-[rgba(7,6,24,0.7)]">
                    <div className="flex flex-col items-center">
                        <img src={profilePhoto} alt=""/>
                        <div className="lg:w-24 flex flex-col items-center mt-4">
                            <label className="block text-white mb-1.5 ">User ID</label>
                            <input disabled placeholder="25367YT" className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 placeholder-[#666666]"/>
                        </div>
                    </div>
                    <form className="text-white flex flex-wrap w-full max-w-[595px] gap-4">
                        <div className="lg:w-72">
                            <label className="block text-sm mb-1.5 ">Ad</label>
                            <input disabled className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600"/>
                        </div>
                        <div className="lg:w-72">
                            <label className="block text-sm mb-1">Soyad</label>
                            <input disabled className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                        </div>
                        <div className="lg:w-72">
                            <label className="block text-sm mb-1">E-mail</label>
                            <input className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                        </div>
                        <div className="lg:w-72">
                            <label className="block text-sm mb-1">Nömrə</label>
                            <div className="flex items-center gap-2">
                                <input className="flex-1 px-4 py-2 rounded-md bg-transparent border border-gray-600" type="tel"   placeholder="+994 XX XXX XX XX"
                                pattern="^\+994(50|51|55|70|77|99)\d{7}$" />
                            </div>
                        </div>
                        <div className="lg:w-72">
                            <label className="block text-sm mb-1">İş Yeri</label>
                            <input className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                        </div>
                        <div className="lg:w-72">
                            <label className="block text-sm mb-1">Vəzifə</label>
                            <input className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600" />
                        </div>
                        <ProfileButton value="Yadda Saxla" width="w-full"/>
                    </form>
                </div>
            </section>
        )
    }

    export default PersonalInfo