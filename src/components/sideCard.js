import React, {useState} from "react";
import {FaShare} from "react-icons/fa/index";


export const SideCard=({video}) =>{
    const [toggle,setToggle]=useState(true);
    return(
            <div className="flex items-center  py-1 whitespace-nowrap">
                <div className="flex-shrink-0 h-15 w-15 rounded">
                    <img className="h-10 w-10 rounded-full "
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFR-93Yf4QCxRyWSROVSOEDu6F5YH7Rh_1w&usqp=CAU"
                         alt=""/>
                </div>
                <div className="ml-4">
                    <div className="text-md font-medium text-gray-900">
                        {video.content}
                    </div>
                </div>
                <div className="ml-auto">
                    <FaShare/>
                </div>
            </div>
    );
}