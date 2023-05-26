import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

   console.log(product);

   const {
      title,
      price,
      brand,
      category,
      thumbnail,
      description,
      discountPercentage,
      rating,
      stock
   } = product;

   return (
      <div className='p-2 mt-2'>
         <div className='flex flex-col md:flex-row mt-5'>
            <img
               className='w-72 lg:max-w-lg rounded'
               src={thumbnail}
               alt={title}
            />
            <div className='p-2'>
               <h2 className='text-xl font-semibold'>{title}</h2>
               <p>Brand: {brand}</p>

               <p>Description: {description}</p>
               <p>Price: ${price}</p>
               <p>DiscountPercentage: {discountPercentage}</p>
               <p>Category: {category}</p>
               <p>Stock: {stock}</p>
               <p>Rating: {rating}</p>
            </div>
         </div>
      </div>
   );
}
