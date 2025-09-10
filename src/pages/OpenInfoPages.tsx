import { Outlet } from 'react-router-dom'

const OpenInfoPages = () => {
  return (
    <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">

            <Outlet />
    </div>  
  )
}

export default OpenInfoPages