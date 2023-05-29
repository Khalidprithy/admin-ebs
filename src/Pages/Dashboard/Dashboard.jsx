import DashboardCharts from './DashboardCharts';
import DashboardIntro from './DashboardIntro';
import OrderSummary from './OrderSummary';
import SellsInfo from './SellsInfo';
import TopPerformers from './TopPerformers';

export default function Dashboard() {
   return (
      <div className='mt-6'>
         <SellsInfo />
         <DashboardIntro />
         <DashboardCharts />
         <OrderSummary />
         <TopPerformers />
      </div>
   );
}
