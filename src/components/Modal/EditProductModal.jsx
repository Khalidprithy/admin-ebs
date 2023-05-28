import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/slice/products';

export default function EditProductModal({ product }) {
   const dispatch = useDispatch();
   const [changed, setChanged] = useState(false);
   const [formData, setFormData] = useState(product);

   const handleSave = () => {
      dispatch(
         updateProduct({ productId: formData.id, updatedProductData: formData })
      );
      setChanged(false);
   };

   const handleCancel = () => {
      setFormData({ ...product });
      setChanged(false);
   };

   return (
      <>
         <input
            type='checkbox'
            id='productModalEdit'
            className='modal-toggle'
         />
         <div className='modal backdrop-blur'>
            <div className='modal-box relative rounded'>
               <label
                  htmlFor='productModalEdit'
                  className='btn btn-sm btn-circle hover:bg-orange-600 border-0 absolute right-2 top-2'
               >
                  ✕
               </label>
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
                           setChanged(true);
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
                           setChanged(true);
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
                           setChanged(true);
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
                           setChanged(true);
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
                           setChanged(true);
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
                           setChanged(true);
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
                        setChanged(true);
                        setFormData({
                           ...formData,
                           description: e.target.value
                        });
                     }}
                  />
               </div>

               {changed && (
                  <div className='flex justify-end gap-2 mt-2'>
                     <button
                        onClick={handleCancel}
                        className='btn btn-outline btn-sm rounded'
                     >
                        Cancel
                     </button>
                     <button
                        onClick={handleSave}
                        className='btn btn-primary btn-sm text-white rounded'
                     >
                        Save
                     </button>
                  </div>
               )}
            </div>
         </div>
      </>
   );
}

EditProductModal.propTypes = {
   setIsModalOpen: PropTypes.bool,
   tempProduct: PropTypes.object,
   product: PropTypes.object
};
