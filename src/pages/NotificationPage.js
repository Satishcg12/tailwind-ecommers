import React, { useState } from 'react'
import Notification from '../components/Notification'
import PopUpNotificationDetail from '../components/PopUpNotificationDetail'

const NotificationPage = () => {
    const [notification, setNotification] = useState(null)

    const showNotificaionDetials =(title,category,time,msg)=>{
        setNotification({
            title:title,
            category:category,
            msg:msg,
            time:time,
        })
    }
    const closeNotificationDetails =()=>{
        setNotification(null)
    }
    return (
        <>
        <PopUpNotificationDetail notification={notification} close={closeNotificationDetails}/>
        
        
            <div className='grid  md:grid-cols-3 gap-0 md:gap-6 '>
                <div className="hidden md:block w-auto"> 
                    <div>
                        
                    <h1 className='my-1  font-bold text-gray-600 text-2xl'>
                        Category
                    </h1>
                    <ul className=' p-5 rounded'>
                        <li className='border-b px-2'>All</li>
                        <li className='border-b px-2'>Order/Deliver</li>
                        <li className='border-b px-2'>Offers</li>
                        <li className='border-b px-2'>Costomer Service</li>
                    </ul>
                    </div>
                </div>

                <div className=" md:col-span-2 flex flex-col justify-center items-center">
                    <h1 className='font-bold text-gray-600 text-3xl py-4'>Notificaitons</h1>
                    

                    <Notification 
                        title='Your order have been placed '
                        category='Order/Deliver'
                        time='12'
                        msg='you have ordered 2 iphone, 3 mac, and 9 mac book and your total  is $102390129039012'
                        showNotificaionDetials={showNotificaionDetials}
                    />
                    <Notification
                        showNotificaionDetials={showNotificaionDetials}
                    
                    />
                        <div className='w-11/12  bg-blue-500 hover:bg-blue-600 text-white text-center rounded'>
                                Load more
                        </div>   
                </div>
                
            </div>
        </>
    )
}

export default NotificationPage
