import React, { useState } from 'react'

const Layout = () => {
       const [selectedShape, setSelectedShape] = useState({
            name: 'Ellipse',
            width: 134,
            height: 233,
            Rotation: -170,
            x: 51.55,
            y: 37.51
        })
  return (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Layout</h2>
                        <div>
                            <h4 className="text-sm font-medium mb-3 text-gray-300">Dimensions</h4>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-400">W</span>
                                    <input
                                        type="text"
                                        value={selectedShape.width}
                                        onChange={(e) => setSelectedShape({ ...selectedShape, width: parseInt(e.target.value) || 0 })}
                                        className="flex-1 px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm"
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-400">H</span>
                                    <input
                                        type="text"
                                        value={selectedShape.height}
                                        onChange={(e) => setSelectedShape({ ...selectedShape, height: parseInt(e.target.value) || 0 })}
                                        className="flex-1 px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Layout
