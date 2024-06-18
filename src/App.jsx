import React from 'react';

const categories = [
  { name: 'AI and Automation Tools', description: 'Tools leveraging AI for automation and productivity.' },
  { name: 'Apple Shortcuts', description: 'Automate tasks on your Apple devices.' },
  { name: 'Pushcut', description: 'Automate notifications and actions on iOS.' },
  { name: 'IFTTT', description: 'Connect different services to automate workflows.' },
  { name: 'BTTT for Mac', description: 'BetterTouchTool for advanced Mac automation.' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-12 bg-blue-600 p-4 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-white">Automation and Productivity Tools Directory</h1>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:bg-blue-50 transition duration-300">
              <h2 className="text-2xl font-bold mb-2 text-blue-700">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;