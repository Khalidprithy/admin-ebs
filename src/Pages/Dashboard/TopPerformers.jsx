import EmployeePerformanceCard from '../../components/EmployeePerformanceCard';

export default function TopPerformers() {
   return (
      <div className='bg-white m-2'>
         <div className='p-4 max-w-xl'>
            <h4 className='text-xl font-semibold'>TopPerformers</h4>
            <div className='flex items-center justify-between py-1'>
               <p className='text-xl'>
                  Stores <br /> <span className='text-3xl'>32</span>
               </p>
               <p className='text-xl'>
                  Employees <br /> <span className='text-3xl'>147</span>
               </p>
            </div>
         </div>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-4'>
            <EmployeePerformanceCard
               name={'John Doe'}
               id={'JD123'}
               percentage={85}
            />
            <EmployeePerformanceCard
               name={'Sarah Johnson'}
               id={'SJ456'}
               percentage={73}
            />
            <EmployeePerformanceCard
               name={'Michael Smith'}
               id={'MS789'}
               percentage={91}
            />
            <EmployeePerformanceCard
               name={'Emily Davis'}
               id={'ED234'}
               percentage={89}
            />
            <EmployeePerformanceCard
               name={'David Wilson'}
               id={'DW567'}
               percentage={78}
            />
            <EmployeePerformanceCard
               name={'Olivia Brown'}
               id={'OB890'}
               percentage={92}
            />
         </div>
      </div>
   );
}
