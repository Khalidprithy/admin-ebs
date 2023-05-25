import DashboardCharts from './DashboardCharts';
import DashboardIntro from './DashboardIntro';
import SellsInfo from './SellsInfo';

export default function Dashboard() {
   return (
      <div>
         <SellsInfo />
         <DashboardIntro />
         <DashboardCharts />
      </div>
   );
}
