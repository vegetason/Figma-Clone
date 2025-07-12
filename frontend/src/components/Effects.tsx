import { ChevronDown, Eye, Minus, Plus } from 'lucide-react'
import React from 'react'

const Effects = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Effects</h2>
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
                <input type="checkbox" className="w-4 h-4 bg-gray-800 border border-gray-600 rounded" />
                <div className="relative flex-1">
                    <select
                        value="Drop shadow"
                        onChange={() => { }}
                        className="w-full px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm appearance-none"
                    >
                        <option value="Drop shadow">Drop shadow</option>
                        <option value="Inner shadow">Inner shadow</option>
                        <option value="Blur">Blur</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
                <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <Minus className="w-4 h-4 cursor-pointer hover:text-red-400" />
                </div>
            </div>
        </div>
    )
}

export default Effects
