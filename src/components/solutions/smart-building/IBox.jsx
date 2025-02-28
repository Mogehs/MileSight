import React from 'react';
import pic from '/Smartbuilding/ibox.jpg';

const IBox = () => {
    return (
        <div className='h-[300px] w-full lg:h-[400px] flex items-center justify-center'>
            <div className='h-[70%] w-[70%] max-w-[70%] max-h-[70%] flex items-center justify-center'>
                <img src={pic} alt="IBox" className='w-full h-auto max-h-full rounded-lg shadow-lg' />
            </div>
        </div>
    );
}

export default IBox;
