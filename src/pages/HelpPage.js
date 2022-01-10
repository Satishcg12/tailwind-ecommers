import React, { useState } from 'react'

const HelpPage = () => {
    const [comment, setComment] = useState(0)
    return (
        <>
                <div className='flex justify-center pt-10'>
                    <form className='flex flex-col md:w-9/12 sm:w-10/12 w-11/12 p-3 bg-white  shadow-lg rounded-lg'>
                        <label htmlFor="email" className='font-bold text-gray-700 text-xl p-1'>Your email</label>
                        <input type="text" id='email' name='email' className='border p-1 rounded-lg outline-blue-500' placeholder='Verified email please'/>
                        <label htmlFor="comment"  className='font-bold text-gray-700 text-xl p-1'>Comment</label>
                        <textarea id='comment' name='comment'  className='border p-1 rounded-lg outline-blue-500' placeholder='your query !! and we will contact you soon....' onChange={e=>{
                            setComment(e.target.textLength)
                        }} {comment>50 && disabled}></textarea>
                        <div className='text-xs text-gray-500 self-end'>{comment}/100</div>
                        <button type="submit" className='my-2 p-1 bg-blue-500 rounded text-white'>Submit</button>
                    </form>
                </div>
        </>
    )
}

export default HelpPage
