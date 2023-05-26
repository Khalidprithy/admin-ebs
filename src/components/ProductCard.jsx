import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../redux/slice/products';
import DeleteConfirmationModal from './Modal/DeleteConfirmationModal';

export default function ProductCard({ product }) {
   const { id, title, brand, thumbnail } = product || {};
   const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const dispatch = useDispatch();

   const handleDeleteClick = () => {
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
   };

   const handleDeleteProduct = () => {
      dispatch(deleteProduct(id));
      setIsModalOpen(false);
   };

   const handleViewDetails = () => {
      navigate(`/product/${id}`);
   };

   return (
      <div className='bg-white p-2 rounded flex items-center justify-between'>
         <div className='flex items-center gap-2'>
            <img className='w-20 max-h-16 rounded-md' src={thumbnail} alt='' />
            <div>
               <h4 className='text-base font-medium'>{title}</h4>
               <p className='text-sm text-gray-600'>{brand}</p>
            </div>
         </div>

         <div className='flex items-center w-fit'>
            <button
               className='hover:bg-orange-200 p-2 border border-gray-200 tooltip tooltip-success'
               data-tip='Details'
               onClick={handleViewDetails}
            >
               <AiFillEye className='text-lg text-teal-600' />
            </button>
            <button
               className='hover:bg-orange-200 p-2 border border-gray-200 border-l-0 tooltip tooltip-error'
               data-tip='Delete'
               onClick={handleDeleteClick}
            >
               <BiTrash className='text-lg text-red-400' />
            </button>
         </div>

         <DeleteConfirmationModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onDelete={handleDeleteProduct}
            title={title}
         />
      </div>
   );
}

ProductCard.propTypes = {
   product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
   }).isRequired
};
