import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useMediaQuery } from 'react-responsive';

export default function PolarChart() {
   const isMobile = useMediaQuery({ maxWidth: 767 });

   const [polarChart] = useState({
      series: [32, 36, 45, 38, 60],
      options: {
         chart: {
            width: 370,
            type: 'polarArea'
         },
         labels: ['Women', 'Man', 'Kids', 'Tech', 'Decor'],
         fill: {
            opacity: 1,
            colors: ['#28B463', '#D68910', '#5DADE2', '#48C9B0', '#EC7063']
         },
         stroke: {
            width: 1,
            colors: ['#28B463', '#D68910', '#5DADE2', '#48C9B0', '#EC7063']
         },
         yaxis: {
            show: false
         },
         legend: {
            position: 'bottom'
         },
         plotOptions: {
            polarArea: {
               rings: {
                  strokeWidth: 0
               },
               spokes: {
                  strokeWidth: 0
               }
            }
         },
         theme: {
            monochrome: {
               enabled: true,
               shadeTo: 'light',
               shadeIntensity: 0.6
            }
         }
      }
   });

   const chartWidth = isMobile ? '100%' : '80%';

   return (
      <div className='w-[400px] sm:w-[500px] h-[400px] lg:w-4/12 mt-6 m-2 bg-white pr-4 rounded-lg p-2 shadow mx-auto'>
         <h4 className='text-base font-semibold m-2'>Sells Ratios</h4>

         <ReactApexChart
            options={polarChart.options}
            series={polarChart.series}
            type='polarArea'
            width={chartWidth}
            height={350}
         />
      </div>
   );
}
