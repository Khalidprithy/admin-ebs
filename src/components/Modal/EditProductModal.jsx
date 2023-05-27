import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
export default function EditProductModal({ setIsModalOpen, product }) {
   const [formData, setFormData] = useState(product);

   return (
      <div className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur'>
         <div className='relative bg-gray-100 dark:bg-gray-800 rounded p-8 shadow-md border border-gray-200'>
            <button
               className='absolute top-1 right-1'
               onClick={() => setIsModalOpen(false)}
            >
               <AiFillCloseCircle className='text-2xl hover:text-orange-500 ' />
            </button>
            <div>
               <h4 className='text-lg font-semibold text-center pb-5'>
                  Edit this product
               </h4>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-2'>
               <div className='flex flex-col w-full'>
                  <label className='px-2 font-semibold' htmlFor='question'>
                     Title
                  </label>
                  <input
                     type='text'
                     id='title'
                     className='w-full m-1 px-3 py-2 rounded'
                     value={formData?.title}
                     onChange={e => {
                        setFormData({
                           ...formData,
                           title: e.target.value
                        });
                     }}
                  />
               </div>
               <div className='flex flex-col w-full'>
                  <label className='px-2 font-semibold' htmlFor='question'>
                     Brand
                  </label>
                  <input
                     type='text'
                     id='brand'
                     className='w-full m-1 px-3 py-2 rounded'
                     value={formData?.brand}
                     onChange={e => {
                        setFormData({
                           ...formData,
                           brand: e.target.value
                        });
                     }}
                  />
               </div>
               <div className='flex flex-col w-full'>
                  <label className='px-2 font-semibold' htmlFor='question'>
                     Category
                  </label>
                  <input
                     type='text'
                     id='category'
                     className='w-full m-1 px-3 py-2 rounded'
                     value={formData?.category}
                     onChange={e => {
                        setFormData({
                           ...formData,
                           category: e.target.value
                        });
                     }}
                  />
               </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-2'>
               <div className='flex flex-col w-full'>
                  <label className='px-2 font-semibold' htmlFor='question'>
                     Price
                  </label>
                  <input
                     type='number'
                     id='price'
                     className='w-full m-1 px-3 py-2 rounded'
                     value={formData?.price}
                     onChange={e => {
                        setFormData({
                           ...formData,
                           price: e.target.value
                        });
                     }}
                  />
               </div>
               <div className='flex flex-col w-full'>
                  <label className='px-2 font-semibold' htmlFor='question'>
                     Stock
                  </label>
                  <input
                     type='number'
                     id='stock'
                     className='w-full m-1 px-3 py-2 rounded'
                     value={formData?.stock}
                     onChange={e => {
                        setFormData({
                           ...formData,
                           stock: e.target.value
                        });
                     }}
                  />
               </div>
               <div className='flex flex-col w-full'>
                  <label className='px-2 font-semibold' htmlFor='question'>
                     DiscountPercentage
                  </label>
                  <input
                     type='number'
                     id='discountPercentage'
                     className='w-full m-1 px-3 py-2 rounded'
                     value={formData?.discountPercentage}
                     onChange={e => {
                        setFormData({
                           ...formData,
                           discountPercentage: e.target.value
                        });
                     }}
                  />
               </div>
            </div>
            <div className='flex flex-col w-full'>
               <label className='px-2 font-semibold' htmlFor='question'>
                  Description
               </label>
               <textarea
                  id='description'
                  className='w-full m-1 px-3 py-2 rounded'
                  value={formData?.description}
                  onChange={e => {
                     setFormData({
                        ...formData,
                        description: e.target.value
                     });
                  }}
               />
            </div>

            <button className='btn btn-outline w-full rounded mt-5'>
               Save Changes
            </button>
         </div>
      </div>
   );
}

EditProductModal.propTypes = {
   setIsModalOpen: PropTypes.bool,
   tempProduct: PropTypes.object,
   product: PropTypes.object
};
