import { Eye, Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

const Fill = () => {
    const [fillOpacity, setFillOpacity] = useState(100)
  return (
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Fill</h2>
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                                <Plus className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-600 rounded border border-gray-500"></div>
                            <span className="text-sm font-mono text-gray-300">D9D9D9</span>
                            <div className="flex items-center space-x-2 ml-auto">
                                <span className="text-sm">{fillOpacity}</span>
                                <span className="text-sm text-gray-400">%</span>
                                <Eye className="w-4 h-4 text-gray-400" />
                                <Minus className="w-4 h-4 cursor-pointer hover:text-red-400" />
                            </div>
                        </div>
                    </div>
  )
}

export default Fill
