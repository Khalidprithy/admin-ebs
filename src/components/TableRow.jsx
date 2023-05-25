export default function TableRow(product) {
   console.log(product.product);

   return (
      <tr>
         <td>
            <div className='flex items-center space-x-3'>
               <div className='avatar'>
                  <div className='mask mask-square rounded w-12 h-12'>
                     <img
                        src={product.product?.thumbnail}
                        alt='Avatar Tailwind CSS Component'
                     />
                  </div>
               </div>
               <div>
                  <div className='font-bold'>{product.product?.title}</div>
                  <div className='text-sm opacity-50'>
                     {product.product?.brand}
                  </div>
               </div>
            </div>
         </td>
         <td>
            {product.product?.category}
            <br />
            <span className='badge badge-ghost badge-sm'>
               {product.product?.rating}
            </span>
         </td>
         <td> ${product.product?.price}</td>
         <th>
            <button className='btn btn-ghost btn-xs'>Details</button>
            <button className='btn btn-ghost btn-xs'>Delete</button>
         </th>
      </tr>
   );
}
