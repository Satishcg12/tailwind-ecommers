import React from 'react'
import Notification from './SubComponents/Notification'

const NotificationPage = () => {
    return (
        <>
        <h1 className='my-3 text-center font-bold text-gray-600 text-3xl'>
            Notification
        </h1>
        
            <div className='grid md:grid-cols-3 gap-6 m-6'>

                <div className=" col-span-2">
                    <Notification title='I-phone' msg='Ha fdfasdfasdf dfa   ve order your I-Phone  it will be delivered with in timefasdjfasklfjaskdjf' time={12} />
                    <Notification title='samsung' msg=' sdjfkajsdklfjklasjdklfjaskdj fasdjflkaj  fkajsdklfj asdkjdkl fjkkfjkl jdklfjklsj  fjjfasklfjaskdjf' time={12} />

                    <div className=' border w-11/12 bg-blue-500 hover:bg-blue-600 text-white text-center rounded'>
                            Load more
                    </div>   
                </div>
                
                <div className="hidden md:block w-auto"> 
                    <div>
                        
                    <h1 className='my-1  font-bold text-gray-600 text-xl'>
                        Category
                    </h1>
                    <ul className='border p-5 rounded'>
                        <li className='border-b px-2'>All</li>
                        <li className='border-b px-2'>Ordered</li>
                        <li className='border-b px-2'>Delivered</li>
                        <li className='border-b px-2'>Offers</li>
                        <li className='border-b px-2'>Suggestion</li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationPage
