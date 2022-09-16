import React from 'react';

const OrderButton = ({children}) => {
    return (
        <button className="btn btn-info upper text-black font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">{children}</button>
    );
};

export default OrderButton;