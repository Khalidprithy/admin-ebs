import { BsClipboard2CheckFill, BsFillCartCheckFill } from 'react-icons/bs';
import { MdPending } from 'react-icons/md';
import OrderInfoCard from '../../components/OrderInfoCard';
export default function OrderSummary() {
   return (
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-1'>
         <OrderInfoCard
            name={'New Orders'}
            value={327}
            icon={BsFillCartCheckFill}
         />
         <OrderInfoCard name={'Order Pending'} value={174} icon={MdPending} />
         <OrderInfoCard
            name={'Completed Order'}
            value={680}
            icon={BsClipboard2CheckFill}
         />
      </div>
   );
}
