import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Legend, ResponsiveContainer, LabelList } from 'recharts';

type ChartDataItem = {
    name: string;
    2020: number;
    2021: number;
    2022: number;
    2023: number;
    2024: number;
    2025: number;
};

interface MacroEconomicChartProps {
    data: ChartDataItem[];
}

const colors = {
    2020: '#8979FF',
    2021: '#FF928A',
    2022: '#3CC3DF',
    2023: '#FFAE4C',
    2024: '#537FF1',
    2025: '#6FD195',
};

const Chart: React.FC<MacroEconomicChartProps> = ({ data }) => {
    const { t } = useTranslation()
    return (
        <div>
            <div className='title pt-[40px] pl-[24px]'>
                <h1 className='text-[#0047A6] text-lg font-medium'>{t('analytics')}</h1>
            </div>
            <ResponsiveContainer width="100%" height="100%" minHeight={570} >
                <BarChart layout="vertical" data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20, }} >
                    <XAxis type="number" orientation="top" ticks={[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400]} />
                    <YAxis dataKey="name" type="category" orientation="left" width={window.innerWidth < 768 ? 35 : 60} />
                    <Legend />
                    <Bar dataKey="2020" fill={colors['2020']} activeBar={<Rectangle />}>
                        <LabelList
                            dataKey="2020"
                            position="insideRight"
                            fill="#fff"
                            formatter={(val: any) => `${val}`}
                            style={{ fontSize: window.innerWidth < 768 ? 13 : 15 }}

                        />
                    </Bar>
                    <Bar dataKey="2021" fill={colors['2021']} activeBar={<Rectangle />}>
                        <LabelList
                            dataKey="2021"
                            position="insideRight"
                            fill="#fff"
                            formatter={(val: any) => `${val}`}
                            style={{ fontSize: window.innerWidth < 768 ? 13 : 15 }}

                        />
                    </Bar>
                    <Bar dataKey="2022" fill={colors['2022']} activeBar={<Rectangle />}>
                        <LabelList
                            dataKey="2022"
                            position="insideRight"
                            fill="#fff"
                            formatter={(val: any) => `${val}`}
                            style={{ fontSize: window.innerWidth < 768 ? 13 : 15 }}

                        />
                    </Bar>
                    <Bar dataKey="2023" fill={colors['2023']} activeBar={<Rectangle />}>
                        <LabelList
                            dataKey="2023"
                            position="insideRight"
                            fill="#fff"
                            formatter={(val: any) => `${val}`}
                            style={{ fontSize: window.innerWidth < 768 ? 13 : 15 }}

                        />
                    </Bar>
                    <Bar dataKey="2024" fill={colors['2024']} activeBar={<Rectangle />}>
                        <LabelList
                            dataKey="2024"
                            position="insideRight"
                            fill="#fff"
                            formatter={(val: any) => `${val}`}
                            style={{ fontSize: window.innerWidth < 768 ? 13 : 15 }}

                        />
                    </Bar>
                    <Bar dataKey="2025" fill={colors['2025']} activeBar={<Rectangle />}>
                        <LabelList
                            dataKey="2025"
                            position="insideRight"
                            fill="#fff"
                            formatter={(val: any) => `${val}`}
                            style={{ fontSize: window.innerWidth < 768 ? 13 : 15 }}

                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
