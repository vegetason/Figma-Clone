import React, { useState } from 'react';
import { ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const FrameSelector = () => {
  const [expandedCategories, setExpandedCategories] = useState()as any;

  const frameCategories = [
    {
      id: 'phone',
      name: 'Phone',
      items: [
        { name: 'iPhone 14 Pro', dimensions: '393 × 852' },
        { name: 'iPhone 14', dimensions: '390 × 844' },
        { name: 'iPhone SE', dimensions: '375 × 667' },
        { name: 'Samsung Galaxy S23', dimensions: '360 × 780' },
        { name: 'Google Pixel 7', dimensions: '412 × 915' },
      ]
    },
    {
      id: 'tablet',
      name: 'Tablet',
      items: [
        { name: 'iPad Pro 12.9"', dimensions: '1024 × 1366' },
        { name: 'iPad Pro 11"', dimensions: '834 × 1194' },
        { name: 'iPad Air', dimensions: '820 × 1180' },
        { name: 'iPad Mini', dimensions: '744 × 1133' },
        { name: 'Surface Pro 9', dimensions: '880 × 1368' },
      ]
    },
    {
      id: 'desktop',
      name: 'Desktop',
      items: [
        { name: 'MacBook Pro 16"', dimensions: '1728 × 1117' },
        { name: 'MacBook Pro 14"', dimensions: '1512 × 982' },
        { name: 'MacBook Air 13"', dimensions: '1440 × 900' },
        { name: 'iMac 24"', dimensions: '1440 × 900' },
        { name: 'Dell XPS 13"', dimensions: '1920 × 1080' },
      ]
    },
    {
      id: 'presentation',
      name: 'Presentation',
      items: [
        { name: 'Standard 4:3', dimensions: '1024 × 768' },
        { name: 'Widescreen 16:9', dimensions: '1920 × 1080' },
        { name: 'Widescreen 16:10', dimensions: '1440 × 900' },
        { name: 'Ultra-wide 21:9', dimensions: '2560 × 1080' },
      ]
    },
    {
      id: 'watch',
      name: 'Watch',
      items: [
        { name: 'Apple Watch 45mm', dimensions: '396 × 484' },
        { name: 'Apple Watch 41mm', dimensions: '352 × 430' },
        { name: 'Apple Watch 44mm', dimensions: '368 × 448' },
        { name: 'Samsung Galaxy Watch', dimensions: '360 × 360' },
      ]
    },
    {
      id: 'paper',
      name: 'Paper',
      items: [
        { name: 'A4', dimensions: '595 × 842' },
        { name: 'A5', dimensions: '420 × 595' },
        { name: 'A6', dimensions: '297 × 420' },
        { name: 'Letter', dimensions: '612 × 792' },
        { name: 'Tabloid', dimensions: '792 × 1224' },
      ]
    },
    {
      id: 'social',
      name: 'Social media',
      items: [
        { name: 'Instagram Post', dimensions: '1080 × 1080' },
        { name: 'Instagram Story', dimensions: '1080 × 1920' },
        { name: 'Facebook Post', dimensions: '1200 × 630' },
        { name: 'Twitter Header', dimensions: '1500 × 500' },
        { name: 'LinkedIn Banner', dimensions: '1584 × 396' },
        { name: 'YouTube Thumbnail', dimensions: '1280 × 720' },
      ]
    },
    {
      id: 'figma',
      name: 'Figma Community',
      items: [
        { name: 'Mobile App Template', dimensions: '375 × 812' },
        { name: 'Web Dashboard', dimensions: '1440 × 1024' },
        { name: 'Landing Page', dimensions: '1200 × 800' },
        { name: 'Email Template', dimensions: '600 × 800' },
      ]
    },
    {
      id: 'archive',
      name: 'Archive',
      items: [
        { name: 'Old iPhone 6', dimensions: '375 × 667' },
        { name: 'iPhone 5', dimensions: '320 × 568' },
        { name: 'iPad 2', dimensions: '768 × 1024' },
        { name: 'Legacy Desktop', dimensions: '1024 × 768' },
      ]
    }
  ];

  const toggleCategory = (categoryId:any) => {
    setExpandedCategories((prev:any) => ({
      ...prev ,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleFrameSelect = (categoryName:any, itemName:any) => {
    console.log(`Selected: ${categoryName} - ${itemName}`);
    // Here you would typically handle the frame selection
  };

  return (
    <div className="w-80 h-screen bg-gray-900 text-white overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium">Frame</h2>
      </div>

      {/* Frame Categories */}
      <div className="py-2">
        {frameCategories.map((category) => (
          <div key={category.id} className="border-b border-gray-700 last:border-b-0">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-2">
                {expandedCategories[category.id] ? (
                  <ChevronDown size={16} className="text-gray-400" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </button>

            {/* Category Items */}
            {expandedCategories[category.id] && (
              <div className="bg-gray-800">
                {category.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleFrameSelect(category.name, item.name)}
                    className="w-full flex items-center justify-between px-8 py-3 hover:bg-gray-700 transition-colors text-left"
                  >
                    <span className="text-sm text-gray-200">{item.name}</span>
                    <span className="text-xs text-gray-400">{item.dimensions}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameSelector;