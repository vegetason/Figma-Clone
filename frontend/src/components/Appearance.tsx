import { Eye } from 'lucide-react'
import React, { useState } from 'react'

const Appearance = () => {
    const [selectedShape, setSelectedShape] = useState({
        name: 'Ellipse',
        width: 134,
        height: 233,
        Rotation: -170,
        x: 51.55,
        y: 37.51
    })
    const [strokeOpacity, setStrokeOpacity] = useState(100)
    const [cornerRadius, setCornerRadius] = useState(0)
    const [fillOpacity, setFillOpacity] = useState(100)
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Appearance</h2>
            <div className="space-y-4">
                <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-300">Opacity</h4>
                    <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            value={`${fillOpacity}%`}
                            onChange={(e) => setFillOpacity(parseInt(e.target.value) || 0)}
                            className="flex-1 px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-medium mb-3 text-gray-300">Corner Radius</h4>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border border-gray-400 rounded"></div>
                        <input
                            type="text"
                            value={cornerRadius}
                            onChange={(e) => setCornerRadius(parseInt(e.target.value) || 0)}
                            className="flex-1 px-2 py-1 bg-gray-800 text-white rounded border border-gray-600 text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appearance
