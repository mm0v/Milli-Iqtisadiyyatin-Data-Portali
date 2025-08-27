import { FiMousePointer } from 'react-icons/fi'
import Chart from '@/components/Chart';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, LabelList, Tooltip } from 'recharts';


const EGovernmentDevelopmentIndex = () => {
  const chartData = [
    { name: 'Figma', 2020: 72.01, 2021: 30.82, 2022: 49.42, 2023: 345, 2024: 34, 2025: 2 },
    { name: 'Sketch', 2020: 74.75, 2021: 65.6, 2022: 94.44, 2023: 54, 2024: 53, 2025: 43 },
    { name: 'XD', 2020: 51.24, 2021: 19.15, 2022: 38.16, 2023: 45, 2024: 21, 2025: 13 },
  ];

  const colors = {
    2020: '#8979FF',
    2021: '#FF928A',
    2022: '#3CC3DF',
    2023: '#FFAE4C',
    2024: '#537FF1',
    2025: '#6FD195',
  };

  return (
    <div className="economics-outlet p-5">
      <div className="w-full max-w-[830px]">
        <div className="right-side mb-8">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
            <h1>Elektron Hökumətin İnkişafı İndeksi</h1>
          </div>
          <div className="mt-10 w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-white">
            <img src="your-image-url.jpg" alt="Government Development" className="w-full h-full object-cover" />
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
      <div className="w-full max-w-none grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="w-full bg-white rounded-[8px]">
          <Chart data={chartData} />
        </div>

        <div className="w-full bg-white rounded-[8px]">
          <Chart data={chartData} />
        </div>
          <div className="w-full bg-white rounded-[8px] col-span-1 lg:col-span-2 p-5">
            <h2 className="text-lg font-medium text-[#0047A6] mb-4">Analitika</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="2020" fill={colors['2020']}>
                  <LabelList dataKey="2020" position="insideTop" fill="#fff" formatter={(val) => `${val}`} />
                </Bar>
                <Bar dataKey="2021" fill={colors['2021']}>
                  <LabelList dataKey="2021" position="insideTop" fill="#fff" formatter={(val) => `${val}`} />
                </Bar>
                <Bar dataKey="2022" fill={colors['2022']}>
                  <LabelList dataKey="2022" position="insideTop" fill="#fff" formatter={(val) => `${val}`} />
                </Bar>
                <Bar dataKey="2023" fill={colors['2023']}>
                  <LabelList dataKey="2023" position="insideTop" fill="#fff" formatter={(val) => `${val}`} />
                </Bar>
                <Bar dataKey="2024" fill={colors['2024']}>
                  <LabelList dataKey="2024" position="insideTop" fill="#fff" formatter={(val) => `${val}`} />
                </Bar>
                <Bar dataKey="2025" fill={colors['2025']}>
                  <LabelList dataKey="2025" position="insideTop" fill="#fff" formatter={(val) => `${val}`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
  )
}

export default EGovernmentDevelopmentIndex