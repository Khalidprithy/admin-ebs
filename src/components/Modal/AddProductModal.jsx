import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Loading from '../../Pages/Shared/Loading';

export default function AddProductModal({ addProduct }) {
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
         discountPercentage: parseInt(data.discount),
         rating: parseInt(data.rating),
         stock: parseInt(data.stock),
         category: ''
      };

      addProduct(productData);
      reset();
   };

   return (
      <>
         <input type='checkbox' id='productModalAdd' className='modal-toggle' />
         <div className='modal backdrop-blur'>
            <div className='modal-box relative rounded'>
               <label
                  htmlFor='productModalAdd'
                  className='btn btn-sm btn-circle absolute right-2 top-2'
               >
                  ✕
               </label>
               <h4 className='text-lg font-semibold text-center pb-5'>
                  Add a new product
               </h4>
               {isLoading ? (
                  <Loading />
               ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='form-control w-full relative'>
                           <label
                              className='text-base text-gray-600 font-semibold p-2'
                              htmlFor='title'
                           >
                              Title
                           </label>
                           <input
                              type='text'
                              id='title'
                              className={`input input-bordered rounded h-10 w-full text-[18px] ${
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
                              className='text-base text-gray-600 font-semibold p-2'
                              htmlFor='brand'
                           >
                              Brand
                           </label>
                           <input
                              type='text'
                              id='brand'
                              className={`input input-bordered rounded h-10 w-full text-[18px] ${
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
                     </div>
                     <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='form-control w-full relative'>
                           <label
                              className='text-base text-gray-600 font-semibold p-2'
                              htmlFor='price'
                           >
                              Price
                           </label>
                           <input
                              type='number'
                              id='price'
                              className={`input input-bordered rounded h-10 w-full text-[18px] ${
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
                              className='text-base text-gray-600 font-semibold p-2'
                              htmlFor='stock'
                           >
                              Stock
                           </label>
                           <input
                              type='number'
                              id='stock'
                              className={`input input-bordered rounded h-10 w-full text-[18px] ${
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
                     </div>

                     <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='form-control w-full relative'>
                           <label
                              className='text-base text-gray-600 font-semibold p-2'
                              htmlFor='discount'
                           >
                              Discount
                           </label>
                           <input
                              type='number'
                              id='discount'
                              className={`input input-bordered rounded h-10 w-full text-[18px] ${
                                 errors.discount &&
                                 'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                              }`}
                              {...register('discount', {
                                 required: 'Discount is required'
                              })}
                           />
                           {errors.discount && (
                              <span className='text-orange-500'>
                                 {errors.discount.message}
                              </span>
                           )}
                        </div>
                        <div className='form-control w-full relative'>
                           <label
                              className='text-base text-gray-600 font-semibold p-2'
                              htmlFor='price'
                           >
                              Rating
                           </label>
                           <input
                              type='number'
                              id='rating'
                              className={`input input-bordered rounded h-10 w-full text-[18px] ${
                                 errors.rating &&
                                 'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                              }`}
                              {...register('rating', {
                                 required: 'Rating is required'
                              })}
                           />
                           {errors.rating && (
                              <span className='text-orange-500'>
                                 {errors.rating.message}
                              </span>
                           )}
                        </div>
                     </div>

                     <div className='form-control w-full relative'>
                        <label
                           className='text-base text-gray-600 font-semibold p-2'
                           htmlFor='description'
                        >
                           Description:
                        </label>
                        <textarea
                           id='description'
                           className={`input input-bordered rounded h-10 pt-2 w-full min-h-16 text-[18px] ${
                              errors.description &&
                              'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                           }`}
                           {...register('description')}
                        ></textarea>
                     </div>
                     <button
                        className=' btn btn-outline btn-md mt-4 mx-auto rounded'
                        type='submit'
                     >
                        Add Product
                     </button>
                  </form>
               )}
            </div>
         </div>
      </>
   );
}

AddProductModal.propTypes = {
   setIsModalOpen: PropTypes.bool,
   addProduct: PropTypes.func
};
