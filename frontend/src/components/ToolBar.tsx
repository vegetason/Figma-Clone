import React, { useState } from 'react';
import {
    Square,
    Minus,
    ArrowUpRight,
    Circle,
    Triangle,
    Star,
    Image,
    Grid3X3,
    Tag,
    Type,
    MessageCircle,
    ChevronDown,
    Send,
    MoreHorizontal,
    Code
} from 'lucide-react';

const ToolBar = () => {
    const [isShapeClicked, setIsShapeClicked] = useState(false);
    const [selectedTool, setSelectedTool] = useState('cursor');
    const [selectedShape, setSelectedShape] = useState(0);
    const shapes = [
        {
            name: 'Rectangle',
            icon: <Square size={16} />,
        },
        {
            name: 'Line',
            icon: <Minus size={16} />,

        },
        {
            name: 'Arrow',
            icon: <ArrowUpRight size={16} />,

        },
        {
            name: 'Ellipse',
            icon: <Circle size={16} />,

        },
        {
            name: 'Polygon',
            icon: <Triangle size={16} />,

        },
        {
            name: 'Star',
            icon: <Star size={16} />,

        },
        {
            name: 'Image/video...',
            icon: <Image size={16} />,

        }
    ];

    const tools = [
        {
            id: 'cursor',
            icon: <Send size={18} className="rotate-45" />,
            tooltip: 'Cursor'
        },
        {
            id: 'grid',
            icon: <Grid3X3 size={18} />,
            tooltip: 'Grid'
        },
        {
            id: 'shapes',
            icon: React.cloneElement(shapes[selectedShape].icon, { size: 18 }),
            tooltip: 'Shapes',
            hasDropdown: true
        },
        {
            id: 'pen',
            icon: <Tag size={18} className="rotate-45" />,
            tooltip: 'Pen'
        },
        {
            id: 'text',
            icon: <Type size={18} />,
            tooltip: 'Text'
        },
        {
            id: 'comment',
            icon: <MessageCircle size={18} />,
            tooltip: 'Comment'
        }
    ];

    const handleToolClick = (toolId: any) => {
        if (toolId === 'shapes') {
            setIsShapeClicked(!isShapeClicked);
        } else {
            setSelectedTool(toolId);
            setIsShapeClicked(false);
        }
    };

    const handleShapeSelect = (shapeIndex: any) => {
        setSelectedShape(shapeIndex);
        setSelectedTool('shapes');
        setIsShapeClicked(false);
    };

    return (
       
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
                <div className="relative">
                    {isShapeClicked && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 min-w-[200px] z-50">
                            {shapes.map((shape, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer text-white text-sm ${selectedShape === index ? 'bg-gray-700' : ''
                                        }`}
                                    onClick={() => handleShapeSelect(index)}
                                >
                                    <div className="flex items-center gap-3">
                                        {selectedShape === index && (
                                            <div className="w-4 h-4 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        )}
                                        {selectedShape !== index && <div className="w-4 h-4"></div>}
                                        {shape.icon}
                                        <span>{shape.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center bg-gray-800 rounded-lg px-2 py-2 gap-1 shadow-lg border border-gray-700">
                        {tools.map((tool, index) => (
                            <React.Fragment key={tool.id}>
                                <button
                                    onClick={() => handleToolClick(tool.id)}
                                    className={`relative flex items-center justify-center w-10 h-10 rounded-md transition-colors ${selectedTool === tool.id || (tool.id === 'shapes' && isShapeClicked)
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                    title={tool.tooltip}
                                >
                                    {tool.icon}
                                    {tool.hasDropdown && (
                                        <ChevronDown
                                            size={12}
                                            className={`absolute -bottom-1 -right-1 transition-transform ${isShapeClicked ? 'rotate-180' : ''
                                                }`}
                                        />
                                    )}
                                </button>

                                {(index === 0 || index === 1 || index === 4 || index === 5) && (
                                    <div className="w-px h-6 bg-gray-600 mx-1"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
     
    );
};

export default ToolBar;