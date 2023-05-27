import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';

export default function AddProductModal({ setIsModalOpen, addProduct }) {
   const isLoading = useSelector(state => state.products.isLoading);
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
   } = useForm();

   const onSubmit = data => {
      const productData = {
         ...data,
         price: parseInt(data.price),
         id: Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 30)) + 31,
         thumbnail: '',
         images: [],
         discountPercentage: 0,
         rating: 0,
         category: ''
      };

      addProduct(productData);
      reset();
      setIsModalOpen(false);
   };
   return (
      <div className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur'>
         <div className='relative bg-gray-100 dark:bg-gray-800 rounded p-8 shadow-md border border-gray-200'>
            <div>
               <h4 className='text-lg font-semibold text-center pb-5'>
                  Add a new product
               </h4>
               {isLoading ? (
                  <div>Loading...</div>
               ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className='form-control w-full relative'>
                        <label
                           className='text-base text-gray-600 p-2'
                           htmlFor='title'
                        >
                           Title
                        </label>
                        <input
                           type='text'
                           id='title'
                           className={`input input-bordered w-full text-[18px] ${
                              errors.title &&
                              'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                           }`}
                           {...register('title', {
                              required: 'Title is required'
                           })}
                        />
                        {errors.title && (
                           <span className='text-orange-500'>
                              {errors.title.message}
                           </span>
                        )}
                     </div>
                     <div className='form-control w-full relative'>
                        <label
                           className='text-base text-gray-600 p-2'
                           htmlFor='brand'
                        >
                           Brand
                        </label>
                        <input
                           type='text'
                           id='brand'
                           className={`input input-bordered w-full text-[18px] ${
                              errors.brand &&
                              'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                           }`}
                           {...register('brand', {
                              required: 'Brand is required'
                           })}
                        />
                        {errors.brand && (
                           <span className='text-orange-500'>
                              {errors.brand.message}
                           </span>
                        )}
                     </div>
                     <div className='form-control w-full relative'>
                        <label
                           className='text-base text-gray-600 p-2'
                           htmlFor='price'
                        >
                           Price:
                        </label>
                        <input
                           type='number'
                           id='price'
                           className={`input input-bordered w-full text-[18px] ${
                              errors.price &&
                              'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                           }`}
                           {...register('price', {
                              required: 'Price is required'
                           })}
                        />
                        {errors.price && (
                           <span className='text-orange-500'>
                              {errors.price.message}
                           </span>
                        )}
                     </div>
                     <div className='form-control w-full relative'>
                        <label
                           className='text-base text-gray-600 p-2'
                           htmlFor='price'
                        >
                           Stock:
                        </label>
                        <input
                           type='number'
                           id='stock'
                           className={`input input-bordered w-full text-[18px] ${
                              errors.stock &&
                              'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                           }`}
                           {...register('stock', {
                              required: 'Stock is required'
                           })}
                        />
                        {errors.stock && (
                           <span className='text-orange-500'>
                              {errors.stock.message}
                           </span>
                        )}
                     </div>
                     <div className='form-control w-full relative'>
                        <label
                           className='text-base text-gray-600 p-2'
                           htmlFor='description'
                        >
                           Description:
                        </label>
                        <textarea
                           id='description'
                           className={`input input-bordered w-full min-h-16 text-[18px] ${
                              errors.description &&
                              'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                           }`}
                           {...register('description')}
                        ></textarea>
                     </div>
                     <button
                        className='btn btn-outline btn-sm mt-4 w-full mx-auto rounded'
                        type='submit'
                     >
                        Add Product
                     </button>
                  </form>
               )}
            </div>
            <button
               className='absolute top-1 right-1'
               onClick={() => setIsModalOpen(false)}
            >
               <AiFillCloseCircle className='text-xl hover:text-orange-500' />
            </button>
         </div>
      </div>
   );
}

AddProductModal.propTypes = {
   setIsModalOpen: PropTypes.bool,
   addProduct: PropTypes.func
};
