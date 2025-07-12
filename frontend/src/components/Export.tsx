import { ChevronDown, Plus } from 'lucide-react'
import React, { useState } from 'react'

const Export = () => {
    const [isExportClicked, setIsExportClicked] = useState(0)
    const [isExportFormatClicked, setIsExportFormatClicked] = useState(0)
    const [isPreviewClicked, setIsPreviewClicked] = useState(0)
    return (
        <div className="">
            <div>
                <h2 className="text-lg font-semibold mb-3">Export</h2>
                <Plus className="w-5 h-5 cursor-pointer hover:text-blue-400" onClick={() => setIsExportClicked(isExportClicked === 1 ? 0 : 1)} />
                {isExportClicked === 1 && (
                    <div className="mt-3 space-y-3">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsExportFormatClicked(isExportFormatClicked === 1 ? 0 : 1)}>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExportFormatClicked === 1 ? 'rotate-180' : ""}`} />
                                <div className="text-sm">PNG</div>
                            </div>
                            {isExportFormatClicked === 1 && (
                                <div className="ml-5 space-y-1">
                                    <div className="text-sm hover:text-blue-400 cursor-pointer">JPG</div>
                                    <div className="text-sm hover:text-blue-400 cursor-pointer">SVG</div>
                                    <div className="text-sm hover:text-blue-400 cursor-pointer">PDF</div>
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsPreviewClicked(isPreviewClicked === 1 ? 0 : 1)}>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isPreviewClicked === 1 ? 'rotate-180' : ""}`} />
                                <div className="text-sm">Preview</div>
                            </div>
                            {isPreviewClicked === 1 && (
                                <div className="ml-5">
                                    <div className="text-sm hover:text-blue-400 cursor-pointer">Preview Image</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Export
