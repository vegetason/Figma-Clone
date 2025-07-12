import React, { useState } from 'react'

const LeftSideBar = () => {
    const theNameOfProject = 'THETECHERS'
    const [n, setN] = useState(0)
    const [isDropDownClicked, setIsDropDownClicked] = useState(0);
    const [isLayerDropDownClicked, setIsLayerDropDownClicked] = useState(0)
    let pages = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About Us' },
        { id: 3, name: 'Contact Page' }
    ];

    let layers = [
        { id: 1, name: 'Background', type: 'image', visible: true, locked: false },
        { id: 2, name: 'Main Text', type: 'text', visible: true, locked: false },
        { id: 3, name: 'Button', type: 'component', visible: false, locked: true },
        { id: 4, name: 'Overlay', type: 'shape', visible: true, locked: false }
    ];

    const getLayerIcon = (type:any) => {
        switch (type) {
            case 'image':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <circle cx="6" cy="7" r="1.5" fill="currentColor"/>
                        <path d="m9 10 1.5-1.5L14 12H2l3-3.5L9 10Z" fill="currentColor"/>
                    </svg>
                );
            case 'text':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h8v1.5H9v6.5H7V5.5H4V4z" fill="currentColor"/>
                    </svg>
                );
            case 'component':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="4" height="4" rx="1" fill="currentColor"/>
                        <rect x="10" y="2" width="4" height="4" rx="1" fill="currentColor"/>
                        <rect x="2" y="10" width="4" height="4" rx="1" fill="currentColor"/>
                        <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor"/>
                    </svg>
                );
            case 'shape':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                );
            default:
                return null;
        }
    };

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
                <div className='flex flex-col flex-1 overflow-y-auto'>
                    <div className='px-4 py-3 border-b border-gray-800'>
                        <div className='flex justify-between items-center mb-2'>
                            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setIsDropDownClicked(isDropDownClicked === 1 ? 0 : 1)}>
                                <svg className={`transition-transform duration-200 ${isDropDownClicked === 1 ? 'rotate-90' : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6L6 8L8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <div className='px-4 py-3 flex-1'>
                        <div className='flex justify-between items-center mb-3'>
                            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setIsLayerDropDownClicked(isLayerDropDownClicked === 1 ? 0 : 1)}>
                                <svg className={`transition-transform duration-200 ${isLayerDropDownClicked === 1 ? 'rotate-90' : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6L6 8L8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='text-sm font-medium text-gray-300'>Layers</span>
                            </div>
                            <svg className='cursor-pointer hover:bg-gray-800 p-1 rounded' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 12l-4-4-4 4M16 8l-4-4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        
                        {isLayerDropDownClicked === 1 && (
                            <div className='space-y-1'>
                                {layers.map((layer, index) => (
                                    <div key={index} className='flex items-center gap-2 p-2 rounded hover:bg-gray-800 cursor-pointer group'>
                                        <div className='text-gray-400 group-hover:text-white'>
                                            {getLayerIcon(layer.type)}
                                        </div>
                                        <span className='text-sm text-gray-300 group-hover:text-white flex-1'>
                                            {layer.name}
                                        </span>
                                        <div className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                                            <svg 
                                                className={`cursor-pointer ${layer.locked ? 'text-gray-500' : 'text-gray-400 hover:text-white'}`} 
                                                width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {layer.locked ? (
                                                    <path d="M4 6V4a3 3 0 0 1 6 0v2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1zm6 0V4a2 2 0 0 0-4 0v2h4z" fill="currentColor"/>
                                                ) : (
                                                    <path d="M4 6V4a3 3 0 0 1 6 0v2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1zm6 0V4a2 2 0 0 0-4 0v2h4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                                )}
                                            </svg>
                                            <svg 
                                                className={`cursor-pointer ${layer.visible ? 'text-gray-400 hover:text-white' : 'text-gray-600'}`} 
                                                width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {layer.visible ? (
                                                    <path d="M7 3c3.5 0 6.5 2.5 6.5 4s-3 4-6.5 4S.5 9.5.5 7 3.5 3 7 3zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor"/>
                                                ) : (
                                                    <>
                                                        <path d="M7 3c3.5 0 6.5 2.5 6.5 4s-3 4-6.5 4S.5 9.5.5 7 3.5 3 7 3zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                                        <path d="M2 2l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                                    </>
                                                )}
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default LeftSideBar