import React from 'react';
import {AiOutlineMail, AiFillLock } from 'react-icons/ai' ;
import {Link} from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input className='w-full p-2 bg-primary border border-input rounded-xl' type="email" placeholder='Email' required/>
              <AiOutlineMail className='absolute right-2 top-3 text-primary' />
            </div>
          </div>
            <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input className='w-full p-2 bg-primary border border-input rounded-xl' type="password" placeholder='Password' required/>
              <AiFillLock className='absolute right-2 top-3 text-primary' />
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign in</button>
        </form>
        <p className='flex justify-center my-2'>Don't have an account? <Link className=' mx-2 font-bold' to='/signup'>Sign up</Link></p>
      </div>
    </div>
  );
};

export default Signin;