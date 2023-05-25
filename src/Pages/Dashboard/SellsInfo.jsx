import { BsCurrencyDollar } from 'react-icons/bs';
import { FaMoneyBillWave, FaMoneyCheck } from 'react-icons/fa';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import SellsInfoCard from '../../components/SellsInfoCard';

export default function SellsInfo() {
   return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
         <SellsInfoCard
            name={'Total sales'}
            value={550}
            icon={BsCurrencyDollar}
         />
         <SellsInfoCard
            name={'Total Revenue'}
            value={210}
            icon={FaMoneyBillWave}
         />
         <SellsInfoCard
            name={"Last Month's Sales"}
            value={8456}
            icon={FaMoneyCheck}
         />
         <SellsInfoCard
            name={'Total Email Sent'}
            value={88}
            icon={MdOutlineMarkEmailRead}
         />
      </div>
   );
}
