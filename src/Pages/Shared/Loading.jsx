const Loading = () => {
   return (
      <div className='flex items-center justify-center p-10 h-screen'>
         <div className='relative'>
            {/* <!-- Outer Ring--> */}
            <div
               className='w-12 h-12 rounded-full absolute
        border-4 border-dashed border-gray-200'
            ></div>

            {/* <!-- Inner Ring --> */}
            <div
               className='w-12 h-12 rounded-full animate-spin absolute
        border-4 border-dashed border-green-500 border-t-transparent'
            ></div>
         </div>
      </div>
   );
};

export default Loading;
