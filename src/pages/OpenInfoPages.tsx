import { Link, Outlet } from 'react-router-dom'
import IconAccordion from "/report/IconAccordion.png";

const OpenInfoPages = () => {
  return (
    <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
        <h1 className='text-[#3460DC] font-bold text-4xl'>Azərbaycanın ÜDM dataseti</h1>



            <Outlet />
    </div>  
  )
}

export default OpenInfoPages