import DashboardCharts from './DashboardCharts';
import DashboardIntro from './DashboardIntro';
import SellsInfo from './SellsInfo';

export default function Dashboard() {
   return (
      <div className='mt-6'>
         <SellsInfo />
         <DashboardIntro />
         <DashboardCharts />
      </div>
   );
}
