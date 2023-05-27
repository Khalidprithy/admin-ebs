import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
export default function TimelineChart() {
   const [timelineChart] = useState({
      series: [
         {
            name: 'Baby',
            data: [
               {
                  x: 'Design',
                  y: [
                     new Date('2019-03-05').getTime(),
                     new Date('2019-03-08').getTime()
                  ]
               },
               {
                  x: 'Code',
                  y: [
                     new Date('2019-03-02').getTime(),
                     new Date('2019-03-05').getTime()
                  ]
               },
               {
                  x: 'Code',
                  y: [
                     new Date('2019-03-05').getTime(),
                     new Date('2019-03-07').getTime()
                  ]
               },
               {
                  x: 'Test',
                  y: [
                     new Date('2019-03-03').getTime(),
                     new Date('2019-03-09').getTime()
                  ]
               },
               {
                  x: 'Test',
                  y: [
                     new Date('2019-03-08').getTime(),
                     new Date('2019-03-11').getTime()
                  ]
               },
               {
                  x: 'Validation',
                  y: [
                     new Date('2019-03-11').getTime(),
                     new Date('2019-03-16').getTime()
                  ]
               },
               {
                  x: 'Design',
                  y: [
                     new Date('2019-03-01').getTime(),
                     new Date('2019-03-03').getTime()
                  ]
               }
            ]
         },
         {
            name: 'Jewelry',
            data: [
               {
                  x: 'Design',
                  y: [
                     new Date('2019-03-02').getTime(),
                     new Date('2019-03-05').getTime()
                  ]
               },
               {
                  x: 'Test',
                  y: [
                     new Date('2019-03-06').getTime(),
                     new Date('2019-03-16').getTime()
                  ],
                  goals: [
                     {
                        name: 'Break',
                        value: new Date('2019-03-10').getTime(),
                        strokeColor: '#CD2F2A'
                     }
                  ]
               },
               {
                  x: 'Code',
                  y: [
                     new Date('2019-03-03').getTime(),
                     new Date('2019-03-07').getTime()
                  ]
               },
               {
                  x: 'Deployment',
                  y: [
                     new Date('2019-03-20').getTime(),
                     new Date('2019-03-22').getTime()
                  ]
               },
               {
                  x: 'Design',
                  y: [
                     new Date('2019-03-10').getTime(),
                     new Date('2019-03-16').getTime()
                  ]
               }
            ]
         },
         {
            name: 'Designer',
            data: [
               {
                  x: 'Code',
                  y: [
                     new Date('2019-03-10').getTime(),
                     new Date('2019-03-17').getTime()
                  ]
               },
               {
                  x: 'Validation',
                  y: [
                     new Date('2019-03-05').getTime(),
                     new Date('2019-03-09').getTime()
                  ],
                  goals: [
                     {
                        name: 'Break',
                        value: new Date('2019-03-07').getTime(),
                        strokeColor: '#CD2F2A'
                     }
                  ]
               }
            ]
         }
      ],
      options: {
         chart: {
            height: 450,
            type: 'rangeBar'
         },
         plotOptions: {
            bar: {
               horizontal: true,
               barHeight: '80%'
            }
         },
         xaxis: {
            type: 'datetime'
         },
         stroke: {
            width: 1
         },
         fill: {
            type: 'solid',
            opacity: 0.6
         },
         legend: {
            position: 'top',
            horizontalAlign: 'left'
         }
      }
   });

   return (
      <div
         className={`w-full sm:w-[400px] lg:w-8/12 h-[400px] mx-auto mt-6 m-2 bg-white pr-4 rounded-lg p-2 shadow`}
      >
         <h4 className='text-base font-semibold m-2'>Product Timeline</h4>

         <ReactApexChart
            options={timelineChart.options}
            series={timelineChart.series}
            type='rangeBar'
            width='100%'
            height={350}
         />
      </div>
   );
}
