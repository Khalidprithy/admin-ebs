import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditProductModal from '../../components/Modal/EditProductModal';
import { fetchProductById } from '../../redux/slice/products';
import Loading from '../Shared/Loading';

export default function ProductDetails() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const product = useSelector(state => state.products.data);
   const isLoading = useSelector(state => state.products.isLoading);
   useEffect(() => {
      dispatch(fetchProductById(id));
   }, [dispatch, id]);

   if (isLoading) {
      return <Loading />;
   }

   if (!product) {
      return <div>Product not found.</div>;
   }

   const {
      title,
      price,
      brand,
      category,
      thumbnail,
      description,
      discountPercentage,
      rating
   } = product;

   let discountedPrice = price - price * (discountPercentage / 100);

   return (
      <div className='p-4 min-h-full'>
         <div className='flex items-center justify-between mt-10 my-5'>
            <h4 className='text-xl font-semibold p-2'>Product Details </h4>
            <label
               htmlFor='productModalEdit'
               className='btn btn-outline btn-md rounded'
            >
               Edit Product
            </label>
         </div>
         <div className='w flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <img
               className='h-[500px] overflow-hidden relative'
               src={thumbnail}
               alt='Product Image'
            />
            <div className='flex flex-col justify-between p-4 leading-normal'>
               <div className='w-full p-2'>
                  <h2 className='text-xl lg:text-2xl font-semibold mb-4'>
                     {title}
                  </h2>
                  <p className='text-base font-light text-gray-600'>
                     {description}
                  </p>
                  <div className='flex items-center gap-5 pt-2'>
                     <p className='border-r-2 border-orange-400 pr-2'>
                        Rating:{' '}
                        <span className='text-orange-500'> {rating}</span>
                     </p>
                     <p className='border-r-2 border-orange-400 pr-2'>
                        Brand: <span className='text-orange-500'>{brand}</span>
                     </p>
                     <p className=''>
                        Category:{' '}
                        <span className='text-orange-500'> {category}</span>
                     </p>
                  </div>

                  <div className='mt-5'>
                     <p className='text-2xl text-gray-400 line-through'>
                        {' '}
                        ${price}
                     </p>

                     <p className='text-3xl text-orange-500 font-semibold'>
                        ${discountedPrice.toFixed(2)}
                     </p>
                     <p className='bg-orange-400 mt-2 w-fit rounded py-0 px-1 text-gray-100'>
                        {discountPercentage}% OFF
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <EditProductModal product={product} />
      </div>
   );
}
