import React from 'react'

const PopUpNotificationDetail = (props) => {
    const detail = props.notification
    return (
        detail && <>
            <div className='fixed inset-0 flex justify-center items-center bg-[#0000006c] backdrop-blur-md z-50'>
                <div className='sm:flex min-h-[50vh] bg-blue-500 text-white relative md:w-7/12 sm:w-9/12 w-11/12 rounded-lg '>
                    <div className='text-7xl px-4 bg-blue-600 rounded-l-lg flex items-center' >
                    {detail.category === 'Order/Deliver' && <i className="fas fa-shopping-cart"></i>}
                    {detail.category === 'error' && <i className="fas fa-exclamation-triangle text-red-500"></i>}  
                    {detail.category === 'Offers' && <i className="fas fa-gifts text-purple-600"></i>} 
                    {detail.category === 'Costomer Service' && <i className="fas fa-shopping-cart text-white"></i>}
                    </div>
                    <button onClick={props.close} className='text-red-500 absolute right-0 m-3'><i className="fas fa-times"></i></button>
                    <div className='p-2'>
                        <h2 className='text-gray-200 text-4xl underline '>{detail.title}</h2>
                        <h3 className='text-gray-300 text-sm'>{detail.category}, {detail.time}</h3>
                        <p>{detail.msg} </p>
                    </div>
                    <div className='absolute bottom-0 right-0 m-5'>
                        <button className='bg-red-500 text-white px-2 p-1 rounded shadow-lg'>Delete</button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default PopUpNotificationDetail
