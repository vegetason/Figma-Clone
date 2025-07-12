import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import Export from './Export'

const PageToolBar = () => {
    const [zoomValue, setZoomValue] = useState('84%')
    const [isZoomValueClicked, setIsZoomValueClicked] = useState(0)
    return (
        <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-medium'>U</div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Share</button>
            </div>
            <div className="space-y-2">
                <div className="text-sm font-medium">Design</div>
                <div className='flex items-center space-x-2 cursor-pointer' onClick={() => setIsZoomValueClicked(isZoomValueClicked === 1 ? 0 : 1)}>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isZoomValueClicked === 1 ? 'rotate-180' : ""}`} />
                    <span className="text-sm">{zoomValue}</span>
                </div>
                {isZoomValueClicked === 1 && (
                    <div className='absolute z-10 bg-gray-800 border border-gray-600 rounded-md p-2 mt-1 shadow-lg'>
                        <input type="text" value={zoomValue} onChange={(e) => setZoomValue(e.target.value)} className="w-full px-2 py-1 bg-gray-700 text-white rounded border border-gray-600 mb-2" />
                        <div className="space-y-1">
                            <div className="px-2 py-1 hover:bg-gray-700 cursor-pointer rounded text-sm">Zoom in</div>
                            <div className="px-2 py-1 hover:bg-gray-700 cursor-pointer rounded text-sm">Zoom to fit</div>
                            <div className="px-2 py-1 hover:bg-gray-700 cursor-pointer rounded text-sm">Zoom out</div>
                            <div className="px-2 py-1 hover:bg-gray-700 cursor-pointer rounded text-sm">Zoom to 50%</div>
                            <div className="px-2 py-1 hover:bg-gray-700 cursor-pointer rounded text-sm">Zoom to 100%</div>
                            <div className="px-2 py-1 hover:bg-gray-700 cursor-pointer rounded text-sm">Zoom to 200%</div>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-3">Page</h2>
                <div className="text-sm text-gray-400">Color Palette</div>
            </div>
            <Export></Export>
        </div>
    )
}

export default PageToolBar
