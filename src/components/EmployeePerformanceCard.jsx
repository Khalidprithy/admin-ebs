import PropTypes from 'prop-types';

export default function EmployeePerformanceCard(props) {
   const { name, id, percentage } = props;
   return (
      <div className='bg-gray-100 flex flex-col items-center p-2 py-4 rounded'>
         <img
            className='w-16 rounded-full ring-1 ring-orange-600 p-1'
            src='https://pixelwibes.com/template/my-task/react/static/media/avatar2.3ef6eaa7.jpg'
            alt=''
         />
         <h4 className='text-lg font-semibold'>{name}</h4>
         <h4 className='text-sm text-gray-400'>{id}</h4>
         <p className='text-2xl'>{percentage}%</p>
      </div>
   );
}

EmployeePerformanceCard.propTypes = {
   name: PropTypes.any,
   id: PropTypes.any,
   percentage: PropTypes.any
};
