import OpenInfoCard from "@/components/OpenInfoCard"
import UploadNewInfoBtn from "@/components/UploadNewInfoBtn"
import { SlidersVertical } from "lucide-react"

const OpenInfoHealth = () => {
  return (
    <div className="px-4 lg:px-8 xl:px-10 py-6 flex items-center">
    <div className="w-full">
      <div className="flex flex-col gap-8 lg:pl-48">
      <div className='flex items-center justify-between'>
        <h1 className='text-[#3460DC] text-4xl font-bold'>Səhiyyə</h1>
       <SlidersVertical className='text-white size-7 cursor-pointer'/>
      </div>
      <div >
        <UploadNewInfoBtn />
      </div>
      <div className="flex flex-col gap-4">
        <OpenInfoCard />
        <OpenInfoCard />
        <OpenInfoCard />
        <OpenInfoCard />
      </div>
      </div>
    </div>
  </div>
  )
}

export default OpenInfoHealth