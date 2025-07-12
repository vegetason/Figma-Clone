import { FlipHorizontal, FlipVertical, RotateCw } from 'lucide-react'
import React, { useState } from 'react'

const Position = () => {
    const [selectedShape, setSelectedShape] = useState({
        name: 'Ellipse',
        width: 134,
        height: 233,
        Rotation: -170,
        x: 51.55,
        y: 37.51
    })
        let position = { x: selectedShape.x, y: selectedShape.y }
  return (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Position</h2>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium mb-3 text-gray-300">Alignment</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="grid grid-cols-3 gap-1">
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                                        </button>
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <div className="w-4 h-4 bg-white rounded-sm mx-auto"></div>
                                        </button>
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <div className="w-4 h-4 bg-white rounded-sm ml-auto"></div>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1">
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                                        </button>
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <div className="w-4 h-4 bg-white rounded-sm mx-auto my-auto"></div>
                                        </button>
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <div className="w-4 h-4 bg-white rounded-sm ml-auto mt-auto"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-3 text-gray-300">Position</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-400">X</span>
                                        <input
                                            type="text"
                                            value={position.x}
                                            onChange={(e) => setSelectedShape({ ...selectedShape, x: parseFloat(e.target.value) || 0 })}
                                            className="flex-1 px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm"
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-400">Y</span>
                                        <input
                                            type="text"
                                            value={position.y}
                                            onChange={(e) => setSelectedShape({ ...selectedShape, y: parseFloat(e.target.value) || 0 })}
                                            className="flex-1 px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-3 text-gray-300">Rotation</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <RotateCw className="w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            value={`${selectedShape.Rotation}°`}
                                            onChange={(e) => setSelectedShape({ ...selectedShape, Rotation: parseInt(e.target.value) || 0 })}
                                            className="flex-1 px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm"
                                        />
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <RotateCw className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <FlipHorizontal className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600">
                                            <FlipVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Position
