import PropTypes from 'prop-types';

export default function ProgressBar(props) {
   const { name, progress, reviews, color } = props;

   return (
      <div className='flex items-center gap-4'>
         <h4 className='w-2/12 font-semibold'>{name}</h4>
         <div className='w-8/12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
            <div
               className={`bg-${color}-600 h-3 rounded-full`}
               style={{ width: `${progress}%` }}
            ></div>
         </div>
         <h4 className='w-2/12 text-end'>{reviews}</h4>
      </div>
   );
}

ProgressBar.propTypes = {
   name: PropTypes.any,
   progress: PropTypes.any,
   reviews: PropTypes.any,
   color: PropTypes.any
};
