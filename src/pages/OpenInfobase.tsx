import BackgroundVideo from "@/components/bg-video/BackgroundVideo"
import { GoDatabase } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import UploadNewInfoBtn from "@/components/UploadNewInfoBtn";
import { SearchIcon } from "lucide-react";
import LinearButton from "@/components/ui/linearButton";

const OpenInfobase = () => {
  return (
    <>
      <div className="video-background">
        <BackgroundVideo videoSrc="/about/bg-about.mp4" />
      </div>

      <section className="flex flex-col justify-center pt-24 px-8">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl text-[#F9F9F9] font-semibold leading-tight items-center flex flex-col lg:pb-14">Açıq Məlumat Bazası Portalına<span className="block">Xoş Gəlmisiniz!</span></h1>
          <form className="flex w-full max-w-[940px]">
            <button
              type="submit"
              className="px-4 py-3.5 bg-[#1E1A26BD] text-white rounded-l-4xl cursor-pointer"
            >
              <SearchIcon />
            </button>
            <input
              type="text"
              placeholder="Axtarış"
              className="bg-[#1E1A26BD] w-full px-1 py-3.5 text-lg rounded-r-4xl text-white"
            />
          </form>
          <div className="flex gap-5 lg:pb-14 pt-2 text-white">
            <h4 className="flex items-center gap-2"> <GoDatabase /> 343 məlumat dəstləri dərc edilmişdir</h4>
            <h4 className="flex items-center gap-2"> <PiUsers /> 232 nəşriyyatçılar</h4>
          </div>

          <UploadNewInfoBtn />

        </div>

        <div className="category-cards flex pt-14">
          <div className="category-card flex flex-col items-center px-8 py-9 gap-5 text-white rounded-xl hover:shadow-[0_0_25px] shadow-[#34467B] hover:text-[#975BE4]">
            <GoDatabase className="size-9" />
            <h3 className="text-lg">Bütün datalar</h3>
          </div>
        </div>

        <div className="pt-12">
          <div className="absolute flex flex-wrap gap-6">
            <LinearButton title="Azərbaycan Açıq Məlumat Siyasəti" pageRouter="economic_indicators" />
            <LinearButton title="Milli Portal" pageRouter="international_demonstrators" />
            <LinearButton title="Dataset sorğusu" pageRouter="open_infobase" />
          </div>
        </div>


      </section>
    </>

  )
}

export default OpenInfobase