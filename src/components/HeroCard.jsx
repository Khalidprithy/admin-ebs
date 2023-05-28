import introImg from '../assets/introGrapichs.png';

export default function HeroCard() {
   return (
      <div className='relative w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2  bg-gray-50 rounded shadow p-5 mt-4'>
         <div>
            <h4 className='text-3xl font-semibold my-4'>Kbin Alam</h4>
            <p className=' text-gray-700 mb-14'>
               Efficiently manage your online business with our intuitive
               interface and powerful tools. Track sales, monitor inventory,
               analyze customer behavior, and make data-driven decisions to
               drive your business forward. Seamlessly integrate with popular
               platforms and enjoy centralized control. Sign up today and unlock
               your e-commerce success with E-Commerce Dashboard.
            </p>
            <button className='btn btn-outline rounded btn-primary text-white absolute bottom-4 left-4'>
               Click Me
            </button>
         </div>
         <img className='hidden md:block w-40 md:w-96' src={introImg} alt='' />
      </div>
   );
}
