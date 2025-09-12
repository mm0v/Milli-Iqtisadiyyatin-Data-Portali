import { ArrowUpRight, Download, SlidersVertical } from 'lucide-react';
import { Outlet, useMatch } from 'react-router-dom'

const OpenInfoPages = () => {

  const isOpenInfo = useMatch("/analytics/open_info");

  if (!isOpenInfo) {
    return <Outlet />;
  }



  return (
    <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
      <div className="w-full lg:ml-32">
        <div className='flex items-center justify-between'>
        <h1 className='text-[#3460DC] text-4xl font-bold'>Azərbaycanın ÜDM dataseti</h1>
          <SlidersVertical className='text-white size-7 cursor-pointer'/>
        </div>
        <div className='flex gap-3.5 items-center mt-14 mb-24'>
          <a href='#' className='p-4 bg-transparent flex items-center gap-30 rounded-lg border-2 border-[#3460DC] text-white'>İnternetdə Açın <ArrowUpRight/></a>
          <button className=' p-2 text-white bg-[rgba(255,255,255,0.3)] rounded-lg cursor-pointer'><Download/></button>
        </div>
        <div>
          <p className='text-white text-2xl'><span className='font-bold'>Dataset haqqında:</span> Bu dataset Azərbaycanın illik ÜDM artım sürətinə dair məlumatları təqdim edir. Bir neçə il ərzində ölkənin iqtisadi performansı barədə ətraflı məlumat təqdim edir və iqtisadi artımı əks etdirir. ÜDM artış ilini göstərir. Sektorların sürətinin qeydə alındığı ili göstərir, bu da iqtisadi tendensiyaların zamanla analizinə imkan tanıyır. ÜDM-nin əvvəlki ildən dəyişmə faizini göstərir, iqtisadi genişlənmə və ya azalma sürətini nümayiş etdirir. Müxtəlif iqtisadi sektorların, məsələn, sənaye, xidmətlər və kənd təsərrüfatı, ümumi ÜDM artımına töhfələrini ətraflı təqdim edir. Eyni dövr ərzində inflyasiya səviyyəsi barədə məlumat təqdim edir, ÜDM artım məlumatları üçün kontekst təmin edir.</p>
          <div className='mt-8 flex flex-col gap-1 text-xs text-[#7C88AA]'>
            <h5>Yükləyən: Admin</h5>
            <h5>Tarix: 10/12/2025</h5>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default OpenInfoPages