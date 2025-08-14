import Chart from '@/components/Chart'
import { FiMousePointer } from 'react-icons/fi'

const StateServices = () => {
  const chartData = [
    { name: 'Figma', 2020: 72.01, 2021: 30.82, 2022: 49.42, 2023: 345, 2024: 34, 2025: 2 },
    { name: 'Sketch', 2020: 74.75, 2021: 65.6, 2022: 94.44, 2023: 54, 2024: 53, 2025: 43 },
    { name: 'XD', 2020: 51.24, 2021: 19.15, 2022: 38.16, 2023: 45, 2024: 21, 2025: 13 },
  ];
  
  return (
    <div className="economics-outlet py-6">
      <div className="w-[830px]">
        <div className="mb-8">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
            <h1>Dövlət xidmətləri üzrə göstəricilər</h1>
          </div>
          <div className='side-img' style={{ backgroundColor: '#fff' }}>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="choose-date">
        <div className="date">
          <input type="date" />
        </div>
        <div className="date">
          <input type="date" />
        </div>
      </div>
      <div className="apply">
        <div className="apply-box">
          Məlumatlarınızın vizuallaşdırılmasını istəyirsinizsə, bizə müraciət edə bilərsiniz.

          <FiMousePointer className='icon' />
        </div>
      </div>
      <div className="w-full max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mx-5">
          <div className="w-[100%] bg-white rounded-[8px]">
            <Chart data={chartData} />
          </div>

          <div className="w-[100%] bg-white rounded-[8px]">
            <Chart data={chartData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateServices