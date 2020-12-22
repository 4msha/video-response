import React from "react";

export const SideCard=({product})=>{
    return(
            <div className="flex border-t border-yellow-700 items-center px-6 py-4 whitespace-nowrap">
                <div className="flex-shrink-0 h-30 w-30">
                    <img className="h-20 w-20 "
                         src={product.src}
                         alt=""/>
                </div>
                <div className="ml-4">
                    <div className="text-md font-medium text-gray-900">
                        {product.name}
                    </div>
                </div>
            </div>
    );
}