import React,{useState} from "react";
import {Link, navigate} from '@reach/router';
import {navbarList} from "../navigation/routes";
import {FaEllipsisV} from "react-icons/fa/index";
import {AmplifySignOut} from "@aws-amplify/ui-react";
import {USER_LOGOUT} from "../common/actions";
import {useDispatch} from "react-redux";

export const AccountInfo=(routes)=> {
    const [toggle, setToggle] = useState(true);
    const [open, setOpen] = useState(0);
    const [isAuth, setIsAuth] = useState(true);
    const dispatch = useDispatch();
    const signOutAction = () => {
        console.log("inside sign out");
        setIsAuth(false);
        dispatch({
            type: USER_LOGOUT,
        });
        try {
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }
    console.log({routes});
    return (
        <div className='pt-4 pb-3 border-t border-gray-700'>
            <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                    <img
                        className='h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''/>
                </div>
                <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-white'>Firdausia</div>
                    <div className='mt-1 text-sm font-medium leading-none text-gray-400'>emaple.com</div>
                </div>
                <div className="ml-auto text-purple-700">
                    <button onClick={() => setToggle(!toggle)}>
                        <FaEllipsisV className="w-8 h-8"/>
                    </button>
                </div>
            </div>
            <div className={`${toggle ? ' hidden p-2 m-2 ' : 'p-2 m-2'}`}>
                {
                    navbarList.map(Route => (
                        <div
                            className={`${open === Route.to ? '  text-purple-200 rounded px-2' : 'px-2'}`}>
                            <Link
                                onClick={() => {
                                    setToggle(!toggle);
                                    setOpen(Route.to)
                                }}
                                to={Route.to}
                                className='flex items-center'>
                                <div
                                    className='mx-12 text-purple-500 font-semibold '
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
                        <button onClick={signOutAction}>
                            <AmplifySignOut/>
                        </button>
                    </button>
                </div>
            </div>
        </div>
    )

}