import { ChevronDown, Eye, Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'


const Stroke = () => {
         const [strokeWeight, setStrokeWeight] = useState(1)
         const [strokePosition, setStrokePosition] = useState('Inside')
         const [isStrokePositionOpen, setIsStrokePositionOpen] = useState(false)

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Stroke</h2>
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
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded border border-gray-500"></div>
                    <span className="text-sm font-mono text-gray-300">000000</span>
                    <div className="flex items-center space-x-2 ml-auto">
                        <span className="text-sm">{strokeWeight}</span>
                        <span className="text-sm text-gray-400">%</span>
                        <Eye className="w-4 h-4 text-gray-400" />
                        <Minus className="w-4 h-4 cursor-pointer hover:text-red-400" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h5 className="text-sm font-medium mb-2 text-gray-300">Position</h5>
                        <div className="relative">
                            <select
                                value={strokePosition}
                                onChange={(e) => setStrokePosition(e.target.value)}
                                className="w-full px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm appearance-none"
                            >
                                <option value="Inside">Inside</option>
                                <option value="Outside">Outside</option>
                                <option value="Center">Center</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-sm font-medium mb-2 text-gray-300">Weight</h5>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <div className="w-3 h-0.5 bg-white"></div>
                            </div>
                            <input
                                type="text"
                                value={strokeWeight}
                                onChange={(e) => setStrokeWeight(parseInt(e.target.value) || 0)}
                                className="flex-1 px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Stroke
