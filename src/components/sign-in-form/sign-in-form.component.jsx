import React from 'react';
// import Button from 'antd/lib/button';
import Button from '../../components/button/button.component';
import { User, Lock, ChevronRight, Instagram, Facebook, Twitter } from 'react-feather';

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className=" h-[700px] w-[360px] shadow-2xl shadow-[#965685] bg-gradient-to-r from-red-100 to-pink-400 rounded-xl transform duration-200 hover:scale-110">
                    <div className="z-[1] relative h-full ">
                        <form className="w-[320px] p-[30px] pt-[156px]">
                        <h1 className="text-[#965685] font-bold text-[24px">Sign in with email and password</h1>
                            <div className="p-5 relative flex  transform duration-200 hover:scale-110">
                                <User className="absolute p-1 mt-1.5 mr-2 text-slate-400" />
                                <input type="text" placeholder="Email" className="p-2  text-slate-600 b-0 p=[10px] pl-[24px] w-[100%] rounded-md shadow-md bg-red-100 shadow-[#965685]" />
                            </div>

                            <div className="p-5 relative flex  transform duration-200 hover:scale-110 mt-10">
                                <Lock className="absolute p-1 mt-1.5 mr-2 text-slate-400" />
                                <input type="text" placeholder="Password" className="p-2  text-slate-600 b-0 p=[10px] pl-[24px] w-[100%] rounded-md shadow-md bg-red-100 shadow-[#965685]" />
                            </div>
                            <div>
                                <div className="transform duration-200 hover:scale-110 relative">
                                <Button  onClick={logGoogleUser}
                                className='flex ml-auto bg-red-100 hover:bg-red-200 text-[#5C5696] rounded-full shadow-lg w-[40%] h-10 text-[16px] mt-[38px] p-[16px 20px] items-center shadow-[#965685]  font-bold border-[#965685] '>
                                <h1 className='ml-auto'>Sign in</h1>
                                
                                <ChevronRight className="text-[#5C5696] ml-auto"
                                size={28}/>
                                </Button>
                                
                                </div>
                            </div>
                            
                        </form>

                        <div className='p-10 shadow-md shadow-[#965685] left-8 rounded-xl absolute bg-[#f7d7ec75] rotate-[-45deg] ' >
                        <div className='rotate-[50deg]'>
                        <h3 className='text-[#965685] font-bold text-[24px]'>or sign in via</h3>
                            <div className='flex text-[#965685] gap-4 mt-6 '>
                            <Twitter className=' transform duration-200 hover:scale-[1.5] fill-pink-400' />
                            <Facebook className=' transform duration-200 hover:scale-[1.5] fill-pink-400'/>
                            <Instagram className=' transform duration-200 hover:scale-[1.5] fill-pink-400'/>
                            </div>
                        </div> 
                        </div>
                    </div>
                    <div className='absolute z-0 top-0 bottom-0 left-0 right-0 inset-0'>
                    <div className='rotate-45 absolute'></div>
                        <span className='rotate-45 absolute h-[320px] w-[220px] bg-white top-[100px] right-[100px] rounded-full opacity-40 '></span>
                        <span className='rotate-45 absolute h-[320px] w-[200px] bg-[#b97bb8] top-[320px] right-[80px] rounded-2xl opacity-40 '></span>
                        <span className='rotate-45 absolute h-[317px] w-[190px] bg-gradient-to-r from-red-100 to-pink-400 top-[100px] right-20 rounded-lg opacity-40'></span>
                        <span className='roundeed-full rotate-45 absolute h-[120px] w-[220px] bg-[#f7deed] top-[60px] right-[20px] opacity-40'></span>
                        
                    </div>
                    
                </div>

            </div>
        );
    
    
}

export default SignInForm