import { useBuilder } from "../contexts/BuilderContext";
import React, { useState } from "react";

const cartoonEmojis = ["🦄", "🐱", "🐸", "🐼", "🐙", "🐧", "🐵", "🐲", "🦊", "🦕"];
const fontWeights = ["normal", "medium", "semibold", "bold", "extrabold"];
const fontSizes = ["sm", "base", "lg", "xl", "2xl", "3xl", "4xl"];

// Add example elements
const exampleElements = [
  {
    id: 'example-1',
    type: 'text',
    label: 'Heading Example',
    preview: {
      content: 'Welcome to Website Builder',
      fontWeight: 'bold',
      fontSize: '2xl',
      textColor: '#1a365d',
      bgColor: '#ebf8ff'
    }
  },
  {
    id: 'example-2',
    type: 'text',
    label: 'Button Example',
    preview: {
      content: 'Click Me',
      fontWeight: 'semibold',
      fontSize: 'base',
      textColor: '#ffffff',
      bgColor: '#4299e1',
      borderRadius: '8',
      padding: '4'
    }
  },
  {
    id: 'example-3',
    type: 'text',
    label: 'Fun Text Example',
    preview: {
      content: '🎉 Party Time!',
      fontWeight: 'extrabold',
      fontSize: 'xl',
      textColor: '#805ad5',
      bgColor: '#faf5ff',
      funMode: true
    }
  }
];

// Add company examples
const companyExamples = [
  {
    id: 'company-1',
    type: 'text',
    label: 'Tech Startup',
    logo: '🚀',
    preview: {
      content: 'InnovateTech Solutions',
      fontWeight: 'bold',
      fontSize: '2xl',
      textColor: '#2563eb',
      bgColor: '#eff6ff'
    },
    description: 'Building the future of digital experiences'
  },
  {
    id: 'company-2',
    type: 'text',
    label: 'Eco Friendly',
    logo: '🌱',
    preview: {
      content: 'GreenLeaf Dynamics',
      fontWeight: 'semibold',
      fontSize: 'xl',
      textColor: '#059669',
      bgColor: '#ecfdf5'
    },
    description: 'Sustainable solutions for a better tomorrow'
  },
  {
    id: 'company-3',
    type: 'text',
    label: 'Creative Agency',
    logo: '🎨',
    preview: {
      content: 'Pixel Perfect Studio',
      fontWeight: 'extrabold',
      fontSize: '2xl',
      textColor: '#7c3aed',
      bgColor: '#f5f3ff'
    },
    description: 'Where creativity meets excellence'
  }
];

const showcaseExamples = [
  {
    id: 'showcase-1',
    type: 'link',
    label: 'Portfolio Site',
    logo: '👨‍💻',
    preview: {
      content: 'View My Portfolio',
      url: 'https://www.martinstranka.com/',
      fontWeight: 'semibold',
      fontSize: 'lg',
      textColor: '#2563eb',
      bgColor: '#eff6ff',
      borderRadius: '8',
      padding: '4'
    },
    description: 'Perfect for creative professionals and developers'
  },
  {
    id: 'showcase-2',
    type: 'link',
    label: 'E-commerce Store',
    logo: '🛍️',
    preview: {
      content: 'Shop Now',
      url: 'https://www.wix.com/website-template/view/html/2860?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store&tpClick=view_button&esi=88672f53-e31a-46c3-b666-4bd6abafff4b',
      fontWeight: 'bold',
      fontSize: 'xl',
      textColor: '#047857',
      bgColor: '#ecfdf5',
      borderRadius: '12',
      padding: '6'
    },
    description: 'Ideal for online stores and marketplaces'
  },
  {
    id: 'showcase-3',
    type: 'link',
    label: 'Restaurant Menu',
    logo: '🍽️',
    preview: {
      content: 'View Menu',
      url: 'https://iamosahan.com/wrapbootstrap-pillarix/catring/index.html',
      fontWeight: 'medium',
      fontSize: 'lg',
      textColor: '#b91c1c',
      bgColor: '#fef2f2',
      borderRadius: '8',
      padding: '4'
    },
    description: 'Great for restaurants and food services'
  }
];

export default function PropertiesPanel() {
  const { elements, selectedId, updateElement } = useBuilder();
  const element = elements.find(el => el.id === selectedId);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [activeCompany] = useState(companyExamples[0]); // Default to first company

  if (!element) {
    return (
      <div className="w-1/4 p-4 border-l bg-gray-50">
        <div className="text-center py-8">
          {/* Company Logo Section */}
          <div className="mb-8">
            <span className="text-6xl mb-4 block animate-bounce">
              {activeCompany.logo}
            </span>
            <h2 
              className="text-2xl font-bold mb-2"
              style={{ color: activeCompany.preview.textColor }}
            >
              {activeCompany.preview.content}
            </h2>
            <p className="text-gray-600">{activeCompany.description}</p>
          </div>

          {/* Showcase Examples */}
          <div className="space-y-4 mb-8">
            <h4 className="text-lg font-medium text-gray-700 mb-4">
              See What's Possible
            </h4>
            
            {showcaseExamples.map((example) => (
              <div
                key={example.id}
                className="p-4 border rounded-lg hover:shadow-lg transition-all group"
                style={{
                  backgroundColor: example.preview.bgColor,
                  borderColor: example.preview.textColor
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl group-hover:animate-bounce">
                    {example.logo}
                  </span>
                  <h5 
                    className="font-medium"
                    style={{ color: example.preview.textColor }}
                  >
                    {example.label}
                  </h5>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">
                  {example.description}
                </p>

                <a
                  href={example.preview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center rounded transition-transform hover:scale-105"
                  style={{
                    backgroundColor: example.preview.textColor,
                    color: example.preview.bgColor,
                    padding: `${example.preview.padding}px`,
                    borderRadius: `${example.preview.borderRadius}px`,
                    fontWeight: example.preview.fontWeight,
                    fontSize: example.preview.fontSize === 'lg' ? '1.125rem' : '1.25rem'
                  }}
                >
                  {example.preview.content}
                </a>
              </div>
            ))}
          </div>

          {/* Quick Start Templates */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700 mb-4">
              Quick Start Templates
            </h4>
            
            {companyExamples.map((company) => (
              <div
                key={company.id}
                className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-all"
                style={{
                  backgroundColor: company.preview.bgColor,
                  borderColor: company.preview.textColor
                }}
                onClick={() => {
                  const newElement = {
                    id: Date.now(),
                    type: company.type,
                    props: {
                      ...company.preview,
                      content: company.preview.content
                    }
                  };
                  updateElement(newElement.id, newElement.props);
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{company.logo}</span>
                  <h5 
                    className="font-medium"
                    style={{ color: company.preview.textColor }}
                  >
                    {company.label}
                  </h5>
                </div>
                <p className="text-sm text-gray-600">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const handleStyleChange = (property, value) => {
    updateElement(selectedId, { [property]: value });
  };

  return (
    <div className="w-1/4 p-4 border-l overflow-y-auto h-screen">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Style Properties</h2>

      {/* Preview */}
      <div 
        style={{
          background: element.props.bgColor || "#fff",
          borderRadius: "0.5rem",
          padding: "1rem",
          marginBottom: "1rem",
          border: "2px solid #eee",
          fontWeight: element.props.fontWeight || "normal",
          fontSize: `${element.props.fontSize || '1'}rem`,
        }}
        className={element.props.funMode ? "animate-bounce" : ""}
      >
        <span>{element.props.content || "Preview"}</span>
      </div>

      {/* Text Properties */}
      <div className="space-y-4">
        {/* Font Weight */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Weight
          </label>
          <select
            value={element.props.fontWeight || "normal"}
            onChange={(e) => handleStyleChange("fontWeight", e.target.value)}
            className="w-full border rounded-md p-2"
          >
            {fontWeights.map(weight => (
              <option key={weight} value={weight}>
                {weight.charAt(0).toUpperCase() + weight.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Font Size */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Size
          </label>
          <select
            value={element.props.fontSize || "base"}
            onChange={(e) => handleStyleChange("fontSize", e.target.value)}
            className="w-full border rounded-md p-2"
          >
            {fontSizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Color Picker */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Text Color
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={element.props.textColor || "#000000"}
              onChange={(e) => handleStyleChange("textColor", e.target.value)}
              className="w-8 h-8 p-0 border-0 rounded"
            />
            <span className="text-sm text-gray-500">
              {element.props.textColor || "#000000"}
            </span>
          </div>
        </div>

        {/* Background Color */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Background Color
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={element.props.bgColor || "#ffffff"}
              onChange={(e) => handleStyleChange("bgColor", e.target.value)}
              className="w-8 h-8 p-0 border-0 rounded"
            />
            <span className="text-sm text-gray-500">
              {element.props.bgColor || "#ffffff"}
            </span>
          </div>
        </div>

        {/* Padding */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Padding
          </label>
          <input
            type="range"
            min="0"
            max="8"
            step="1"
            value={element.props.padding || "4"}
            onChange={(e) => handleStyleChange("padding", e.target.value)}
            className="w-full"
          />
        </div>

        {/* Border Radius */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Border Radius
          </label>
          <input
            type="range"
            min="0"
            max="24"
            step="2"
            value={element.props.borderRadius || "0"}
            onChange={(e) => handleStyleChange("borderRadius", e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* Animation Toggle */}
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={!!element.props.funMode}
            onChange={(e) => handleStyleChange("funMode", e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm font-medium text-gray-700">Enable Animation</span>
        </label>
      </div>
    </div>
  );
}
