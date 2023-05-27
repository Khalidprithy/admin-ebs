import PolarChart from '../../components/PolarChart';
import TimelineChart from '../../components/TimelineChart';

export default function DashboardCharts() {
   return (
      <div className='flex flex-col lg:flex-row gap-1 px-1'>
         <PolarChart />
         <TimelineChart />
      </div>
   );
}
