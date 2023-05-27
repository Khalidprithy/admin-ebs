import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignGrapich from '../../assets/signInGrapich.png';
import { login } from '../../redux/slice/authentication';
import Loading from '../Shared/Loading';

export default function SignIn() {
   const navigate = useNavigate();

   const [passwordShow, setPasswordShow] = useState(false);

   const dispatch = useDispatch();
   const { isLoading, isAuthenticated, error, user } = useSelector(
      state => state.authentication
   );

   const {
      register,
      formState: { errors },
      handleSubmit
   } = useForm({
      mode: 'onTouched'
   });

   const SignUp = async data => {
      const { username, password } = data;
      dispatch(login({ username, password }));
      navigate('/dashboard');
   };
   console.log(isAuthenticated, user);

   if (isLoading) {
      return <Loading />;
   }

   return (
      <div className='fixed inset-0 bg-gray-100'>
         <div className='h-screen w-screen flex items-center justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
               <div className='hidden lg:flex flex-col items-center justify-center'>
                  <h4 className='text-2xl lg:text-4xl text-center'>
                     Welcome to <br /> EBS Admin Panel
                  </h4>
                  <img src={SignGrapich} alt='' />
               </div>
               <div className='w-[350px] md:w-[400px] lg:w-[500px] bg-primary p-4 py-5 md:py-10  rounded-md overflow-auto'>
                  <h4 className='text-2xl md:text-4xl font-semibold text-center text-gray-100 py-2 md:py-4'>
                     Sign In
                  </h4>
                  {/* <button className='px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-gray-100 hover:border-slate-400 hover:text-green-500 hover:bg-gray-700 hover:shadow transition duration-150 mx-auto'>
                     <img
                        className='w-6 h-6'
                        src='https://www.svgrepo.com/show/475656/google-color.svg'
                        loading='lazy'
                        alt='google logo'
                     />
                     <span>Login with Google</span>
                  </button>
                  <div className='divider text-gray-300'>OR</div> */}
                  <form onSubmit={handleSubmit(SignUp)}>
                     <div className='form-control w-full relative'>
                        <label
                           htmlFor='username'
                           className='text-base text-gray-100 p-2'
                        >
                           User Name
                        </label>
                        <input
                           type='text'
                           placeholder='Enter your Username'
                           name='username'
                           className={`input input-bordered w-full text-[18px] ${
                              errors.phone &&
                              'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                           }`}
                           {...register('username', {
                              required: {
                                 value: true,
                                 message: 'Please Enter Your Username'
                              }
                           })}
                        />
                        <label className='label'>
                           {errors.username?.type === 'required' && (
                              <span className='label-text text-base text-orange-400'>
                                 {errors.username.message}
                              </span>
                           )}
                        </label>
                     </div>

                     <div className='form-control w-full relative'>
                        <label
                           className='text-base text-gray-100 p-2'
                           htmlFor='password'
                        >
                           Password
                        </label>
                        <input
                           type={passwordShow ? 'text' : 'password'}
                           placeholder='****************'
                           className={`input input-bordered w-full ${
                              errors.password &&
                              'focus:border-orange-400 focus:ring-orange-400 border-2 border-orange-400'
                           }`}
                           {...register('password', {
                              required: {
                                 value: true,
                                 message: 'Please Enter You Password'
                              }
                           })}
                        />
                        <div className='text-2xl absolute top-[52px] right-[19px] cursor-pointer'>
                           {passwordShow === false ? (
                              <AiFillEyeInvisible
                                 onClick={() => setPasswordShow(!passwordShow)}
                              ></AiFillEyeInvisible>
                           ) : (
                              <AiFillEye
                                 onClick={() => setPasswordShow(!passwordShow)}
                              ></AiFillEye>
                           )}
                        </div>
                        <label className='label'>
                           {errors.password && (
                              <span className='label-text text-base font-sem text-orange-400'>
                                 {errors.password.message}
                              </span>
                           )}
                        </label>
                     </div>

                     <input
                        className='btn btn-outline border border-gray-400 hover:bg-gray-200 w-1/2 flex justify-center text-white hover:text-gray-800 hover:-translate-y-2 mt-4 mx-auto transition ease-out duration-300'
                        type='submit'
                        value='Sign In'
                     />
                  </form>
                  {error}
               </div>
            </div>
         </div>
      </div>
   );
}
