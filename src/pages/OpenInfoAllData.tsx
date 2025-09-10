import { Outlet, useMatch } from "react-router-dom";

const OpenInfoAllData = () => {


  const isEconomic = useMatch("/analytics/open_info/all_data");

  if (!isEconomic) {
    return <Outlet />;
  }

  return (
    <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
      <div className="w-[830px]">
        <div className="bg-red-500">OpenInfoAllData</div>
      </div>
    </div>
  )
}

export default OpenInfoAllData