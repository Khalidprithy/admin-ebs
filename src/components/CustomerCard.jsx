import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function CustomerCard({ customer }) {
   const {
      id,
      firstName,
      lastName,
      age,
      phone,
      gender,
      email,
      image,
      company,
      address
   } = customer || {};

   const navigate = useNavigate();

   const handleViewCart = () => {
      navigate(`/customer/${id}`);
   };

   return (
      <div className='bg-white flex flex-col md:flex-row p-4 rounded shadow'>
         <div className='w-full md:w-3/12 flex flex-col items-center border-r-0 md:border-r border-gray-100 pr-2'>
            <img
               className='w-24 p-1 shadow rounded-full border border-gray-100'
               src={image}
               alt=''
            />
            <h4 className='text-lg font-semibold text-center'>
               {company?.title}
            </h4>
            <div className='flex gap-2 font-semibold text-gray-500 capitalize'>
               <h4>{age}</h4>
               <h4>{gender}</h4>
            </div>
         </div>
         <div className='w-full md:w-9/12 px-2 relative'>
            <div className='flex items-center justify-between border-b border-gray-100 pb-2'>
               <div>
                  <h4 className='text-lg font-semibold'>
                     {firstName} {lastName}
                  </h4>
                  <span className='text-sm text-gray-600'>{company?.name}</span>
               </div>
               <div>
                  <h4 className='text-base font-medium text-gray-600'>
                     {email}
                  </h4>
                  <h4 className='text-end text-sm text-gray-600'>{phone}</h4>
               </div>
            </div>
            <div className='mb-10'>
               <p>
                  {address?.address}, {address?.city}{' '}
               </p>

               <button className='absolute bottom-0 btn btn-outline btn-sm rounded-sm'>
                  Details
               </button>
               <button
                  onClick={handleViewCart}
                  className='absolute bottom-0 right-0 btn btn-outline btn-sm rounded-sm'
               >
                  Cart
               </button>
            </div>
         </div>
      </div>
   );
}

CustomerCard.propTypes = {
   customer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
      phone: PropTypes.number,
      gender: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string,
      company: PropTypes.object,
      address: PropTypes.object
      // Add other relevant prop types for the 'customer' object
   })
};
