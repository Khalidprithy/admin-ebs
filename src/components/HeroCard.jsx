import introImg from '../assets/introGrapichs.png';

export default function HeroCard() {
   return (
      <div className='w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2  bg-gray-50 rounded shadow p-5 mt-4'>
         <div>
            <h4 className='text-3xl font-semibold my-2'>Kbin Alam</h4>
            <p className='font-medium text-gray-600'>
               Welcome back Kbin Alam.Integer molestie, arcu non porta
               sollicitudin, arcu felis aliquam urna, placerat maximus lorem
               urna commodo sem. Pellentesque venenatis leo quam, sed mattis
               sapien lobortis ut.placerat maximus lorem urna commodo sem
            </p>
            <button className='btn btn-outline rounded btn-accent my-2'>
               Click Me
            </button>
         </div>
         <img className='w-40 md:w-96 ' src={introImg} alt='' />
      </div>
   );
}
