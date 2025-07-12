import React, { useState } from 'react'
import Layers from './Layers';
import Pages from './Pages';

const LeftSideBar = () => {
    const theNameOfProject = 'THETECHERS'
    const [n, setN] = useState(0)
    const [isDropDownClicked, setIsDropDownClicked] = useState(0);
    const [isLayerDropDownClicked, setIsLayerDropDownClicked] = useState(0)

    return (
        <div className={`fixed ${n === 0 ? "h-[100vh]" : "h-auto"} w-[280px] bg-gray-900 text-white flex flex-col border-r border-gray-800`}>
            <div className='flex justify-between items-center px-4 py-3 border-b border-gray-800'>
                <div className='flex items-center gap-2'>
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="6" height="6" rx="3" fill="#FF7262" />
                        <rect x="6" y="12" width="6" height="6" rx="3" fill="#A259FF" />
                        <rect x="6" y="18" width="6" height="6" rx="3" fill="#1ABCFE" />
                        <rect x="12" y="6" width="6" height="6" rx="3" fill="#0ACF83" />
                        <rect x="12" y="12" width="6" height="6" rx="3" fill="#FF7262" />
                        <circle cx="15" cy="21" r="3" fill="#0ACF83" />
                    </svg>
                </div>
                <h2 className='text-lg font-medium text-white flex items-center gap-2'>
                    {theNameOfProject}
                </h2>
                <div className='flex items-center gap-2'>
                    <svg className='cursor-pointer hover:bg-gray-800 p-1 rounded' onClick={() => setN(n === 1 ? 0 : 1)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z" fill="currentColor" />
                    </svg>
                </div>
            </div>
            {n === 0 && (
                <>
                    <Pages></Pages>
                    <Layers></Layers>
                </>
            )}
        </div>
    )
}

export default LeftSideBar