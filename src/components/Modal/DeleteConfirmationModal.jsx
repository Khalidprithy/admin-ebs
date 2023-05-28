import PropTypes from 'prop-types';

export default function DeleteConfirmationModal({
   isOpen,
   onClose,
   onDelete,
   title
}) {
   if (!isOpen) {
      return null;
   }

   const handleDelete = () => {
      onDelete();
   };

   return (
      <div className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur'>
         <div className='bg-gray-100 dark:bg-gray-800 rounded-md p-8 shadow-md border border-gray-200'>
            <h2 className='text-lg font-semibold mb-4'>Confirm Delete</h2>
            <p className='text-base text-gray-600 mb-6'>
               Are you sure you want to delete{' '}
               <span className='text-orange-500 font-bold'>{title}</span>{' '}
               product?
            </p>
            <div className='flex justify-end'>
               <button
                  className='btn btn-outline btn-sm rounded mr-4'
                  onClick={onClose}
               >
                  Cancel
               </button>
               <button
                  className='btn btn-error btn-sm rounded text-white'
                  onClick={handleDelete}
               >
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
}

DeleteConfirmationModal.propTypes = {
   isOpen: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired
};
