import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth); 
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate=useNavigate();
      let signInError;
      if (loading || gLoading ||updating) {
        return <Loading></Loading>
        
      }
      if (error || gError) {
        signInError= <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
        
      }
    if(user || gUser || updateError){
        console.log( user || gUser);
    }  
    const onSubmit = async data => {
        
       await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log('update done')
        navigate('./course')
    }
    return (
        <div className='flex h-screen justify-center items-center'>
   <div className="card w-96 bg-white text-primary-content">
  <div className="card-body">
    <h2 className="text-center text-2xl font bold">Sign Up</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"> Name</span>
    
  </label>
  <input
   type="text"
    placeholder="your Name" className="input input-bordered w-full max-w-xs"
    {...register("name", {
        required:{
            value:true,
            message:'Name is Required',
        },
        pattern: {
            value:/(?:[^A-Z]*[a-z])/,
            message:'Given a valid Name'
        },
         minLength: {
            value:4,
            message:'must be 4 character or longer' 
        },
      })}
     />
  <label className="label">
  {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
  {errors.name?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
  {errors.name?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    
    
  </label>
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
    
  </label>
  <input
   type="email"
    placeholder="your Email" className="input input-bordered w-full max-w-xs"
    {...register("email", {
        required:{
            value:true,
            message:'Email is Required',
        },
        pattern: {
            value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message:'provide a valid Email'
        }
      })}
     />
  <label className="label">
  {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    
    
  </label>
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
    
  </label>
  <input
   type="password"
    placeholder=" password" className="input input-bordered w-full max-w-xs"
    {...register("password", {
        required:{
            value:true,
            message:'Password is Required',
        },
        minLength: {
            value:6,
            message:'must be 6 character or longer' 
        },
        pattern: {
            value:/(?:[^A-Z]*[A-Z])/,
            message:'must be 2 Upper Case', 
        },
      })}
     />
  <label className="label">
  {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    
    
  </label>
</div>

      
      {signInError};
      <input className='btn w-full max-w-xs' type="submit" value='Sign Up' />
    </form>
    <p><small>Already have an account?<Link className='text-blue-500' to="/login"> Please  Login!</Link></small> </p>
    <div className="divider">OR</div>
    <button
     onClick={() => signInWithGoogle()}
      className="btn btn-outline">Login With Google</button>

  </div>
</div>
     </div>
    );
};

export default SignUp;