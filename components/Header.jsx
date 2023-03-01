import React from "react";

const Header = () => {
    return (
    <div className="inline-flex flex-col space-y-96 items-end justify-center pl-40 bg-black shadow">
        <div className="transform rotate-45 w-1/5 h-96 bg-pink-900 bg-opacity-50 border rounded-lg border-black"/>
        <p className="w-64 text-6xl font-black tracking-widest leading-10 text-center text-blue-500">ISACA</p>
        <div className="inline-flex items-center justify-center w-64 border-2 border-white bg-white">
            <p className="text-6xl font-black tracking-widest leading-10 text-center text-white">DJS</p>
        </div>
        <div className="inline-flex items-center justify-start px-20">
            <div className="flex space-x-2.5 items-center justify-start">
                <div className="w-6 h-0.5 bg-white"/>
                <p className="text-2xl leading-9 text-white" >We give our clients the decisive advantage from data, machine learning, and artificial intelligence</p>
            </div>
            <div className="inline-flex flex-col items-end justify-center" >
                <div className="inline-flex items-start justify-start px-20 py-6 bg-white border border-white">
                    <p className="text-2xl font-semibold leading-tight text-center uppercase">Subscribe to our events</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header