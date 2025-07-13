import React, { useState } from 'react'
import { ChevronDown, Plus, RotateCw, FlipHorizontal, FlipVertical, Eye, Minus } from 'lucide-react'
import Export from './Export'
import Position from './Position'
import Layout from './Layout'
import Appearance from './Appearance'
import Fill from './Fill'
import Effects from './Effects'
import Stroke from './Stroke'
import PageToolBar from './PageToolBar'
import FrameSelector from './FrameSelection'

const RightSideBar = () => {
    const [isShapeSelected, setIsShapeSelected] = useState(0)
    const [selectedShape, setSelectedShape] = useState({
        name: 'Ellipse',
        width: 134,
        height: 233,
        Rotation: -170,
        x: 51.55,
        y: 37.51
    })
    const [isFrameClicked,setIsFrameClicked]=useState(0)
    return (
        <div className='fixed right-0 top-0 w-80 h-full bg-gray-900 text-white overflow-y-auto border-l border-gray-700'>
            {
                isShapeSelected === 0 && <>
                    <PageToolBar></PageToolBar>
                </>
            }

            {isShapeSelected === 1 && (
                <div className="p-4 space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold">{selectedShape.name}</h2>
                    </div>
                    <Position></Position>
                    <Layout></Layout>
                    <Appearance></Appearance>
                    <Fill></Fill>
                    <Stroke></Stroke>
                    <Effects></Effects>
                    <Export></Export>
                </div>
            )}
            {
                isFrameClicked===1 && (
                    <FrameSelector></FrameSelector>
                )
            }
        </div>
    )
}

export default RightSideBar