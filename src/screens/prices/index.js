import React from "react";

export const Prices =()=>{
    return (
            <div className="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full w-full  p-32  lg:px-10 py-12 ">
                <div className="bg-white w-3/5 lg:w-custom mb-10  mx-6 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
                    <h5 className="font-bold text-base text-orange-700">Basic</h5>
                    <h2 className="pb-4 flex justify-center font-bold border-b border-orange-300"><span className="text-3xl mt-6 mr-1">$</span><span className="text-6xl"> 199.99</span>
                    </h2>
                    <ul className="text-sm font-bold">
                        <li className="pt-4 pb-4 border-b border-orange-200">500 GB Storage</li>
                        <li className="pt-3 pb-4 border-b border-orange-200">2 Users Allowed</li>
                        <li className="pt-4 pb-4 border-b border-orange-200 ">Send up to 3 GB</li>
                    </ul>
                    <button className=" uppercase text-center bg-orange-200 text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold text-primary-very-light rounded-md" >
                        Learn More
                    </button>
                </div>
                <div className="lg:w-custom w-3/5 mb-10 px-6 mx-6  py-16 lg:-mt-6 text-white text-center bg-orange-700 rounded-lg">
                    <h5 className="font-bold text-base ">Professional</h5>
                    <h2 className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center"><span className="text-3xl mt-6 mr-1">$</span><span className="text-6xl "> 249.99</span>
                    </h2>
                    <ul className=" text-sm font-bold">
                        <li className="pt-4 pb-4 border-b border-gray-200">1 TB Storage</li>
                        <li className="pt-4 pb-4 border-b border-gray-200">5 Users Allowed</li>
                        <li className="pt-4 pb-4 border-b border-gray-200">Send up to 10 GB</li>
                    </ul>
                    <button className="uppercase text-center text-sm mt-10 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold bg-orange-100 text-orange-700 text-primary-blue">
                        Learn More
                    </button>
                </div>
                <div className="bg-white w-3/5  mx-6 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
                    <h5 className="font-bold text-base text-orange-700">Master</h5>
                    <h2 className="flex justify-center pb-4 font-bold border-b border-orange-300"><span className="text-3xl mt-6 mr-1">$</span><span className="text-6xl">399.99</span>
                    </h2>
                    <ul className="text-sm font-bold">
                        <li className="pt-4 pb-4 border-b border-orange-200">2 TB Storage</li>
                        <li className="pt-4 pb-4 border-b border-orange-200">10 Users Allowed</li>
                        <li className="pt-4 pb-4 border-b border-orange-200">Send up to 20 GB</li>
                    </ul>
                    <button className="uppercase bg-orange-200 text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold text-primary-very-light">
                        Learn More
                    </button>
                </div>
            </div>
    );
}