import React,{useState} from "react";
import {Link, navigate} from '@reach/router';
import {privateRoutes} from "../navigation/routes";
import {FaEllipsisV} from "react-icons/fa/index";

export const AccountInfo=(routes)=>{
    const [toggle,setToggle]=useState(false);
    const [open,setOpen]=useState(0);
    console.log({routes});
    return(
        <div className='pt-4 pb-3 border-t border-gray-700'>
            <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                    <img
                        className='h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt='' />
                </div>
                <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-white'>Firdausia</div>
                    <div className='mt-1 text-sm font-medium leading-none text-gray-400'>emaple.com</div>
                </div>
                <div className="ml-auto text-yellow-700">
                    <button onClick={()=>setToggle(!toggle)}>
                        <FaEllipsisV className="w-8 h-8"/>
                    </button>
                </div>
            </div>
            <div className={`${toggle? 'hidden p-2 m-2 ':'p-2 m-2'}`}>
                {
                    privateRoutes.map(Route=>(
                        <div
                            className={`${open===Route.to?'  text-yellow-200 rounded px-2':'px-2'}`}>
                            <Link
                                onClick={()=>{
                                    setToggle(!toggle);
                                    setOpen(Route.to)}}
                                to={Route.to}
                                className='flex items-center'>
                                <div
                                    className='mx-12 text-yellow-500 font-semibold md:hidden lg:flex'
                                >
                                    {Route.title}
                                </div>
                            </Link>
                        </div>
                    ))
                }
                <div
                    className='px-2'>
                    <button
                        className='flex items-center'>
                        <div
                            className='mx-12 text-yellow-500 font-semibold md:hidden lg:flex'
                        >
                            Logout
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}