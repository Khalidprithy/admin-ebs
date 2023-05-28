import { FcRefresh } from 'react-icons/fc';
import ProgressBar from './ProgressBar';
import Rating from './Rating';

export default function RatingPreview() {
   return (
      <div className='relative w-full lg:w-5/12 bg-gray-50 shadow rounded p-4 mt-4'>
         <div className='flex items-center justify-between mb-4'>
            <h3 className='text-xl font-semibold'>Customer Reviews</h3>
            <button>
               <FcRefresh />
            </button>
         </div>
         <div className='flex gap-5 items-center'>
            <Rating />
            <h4 className='text-lg font-bold'>
               4.6{' '}
               <span className='text-sm font-normal text-gray-500'>
                  Out of 5 starts
               </span>
            </h4>
         </div>

         <div className='pt-5 mb-14'>
            <ProgressBar
               name={'Excellent'}
               progress={85}
               reviews={42}
               color={'gray'}
            />
            <ProgressBar
               name={'Good'}
               progress={75}
               reviews={56}
               color={'gray'}
            />
            <ProgressBar
               name={'Average'}
               progress={55}
               reviews={26}
               color={'gray'}
            />
            <ProgressBar
               name={'Average'}
               progress={30}
               reviews={34}
               color={'gray'}
            />
            <ProgressBar
               name={'Poor'}
               progress={25}
               reviews={13}
               color={'gray'}
            />
         </div>

         <button className='absolute bottom-4 left-4 btn btn-outline rounded'>
            Read All Reviews
         </button>
      </div>
   );
}
