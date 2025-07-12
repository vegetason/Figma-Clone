import React, { useState } from 'react'

const Pages = () => {
    const [isDropDownClicked, setIsDropDownClicked] = useState(0);
    let pages = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About Us' },
        { id: 3, name: 'Contact Page' }
    ];
    return (
        <>
            <div className='flex flex-col flex-1 overflow-y-auto'>
                <div className='px-4 py-3 border-b border-gray-800'>
                    <div className='flex justify-between items-center mb-2'>
                        <div className='flex items-center gap-2 cursor-pointer' onClick={() => setIsDropDownClicked(isDropDownClicked === 1 ? 0 : 1)}>
                            <svg className={`transition-transform duration-200 ${isDropDownClicked === 1 ? 'rotate-90' : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6L6 8L8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className='text-sm font-medium text-gray-300'>Pages</span>
                        </div>
                        <svg className='cursor-pointer hover:bg-gray-800 p-1 rounded' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>

                    {isDropDownClicked === 1 && (
                        <div className='ml-4 space-y-1'>
                            {pages.map((page, index) => (
                                <div key={index} className='text-sm text-gray-400 hover:text-white cursor-pointer py-1'>
                                    {page.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Pages
