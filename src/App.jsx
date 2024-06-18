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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Automation Tools Directory</h1>
          <ul className="flex space-x-4">
            {categories.map((category) => (
              <li key={category.name} className="text-white hover:underline">
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        <section className="hero bg-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to the Automation Tools Directory</h2>
            <p className="text-xl">Discover the best tools to enhance your productivity and automate your workflows.</p>
          </div>
        </section>
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:bg-blue-50 transition duration-300">
                <h2 className="text-2xl font-bold mb-2 text-blue-700">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h3>
          <form className="mb-4">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg"/>
            <button type="submit" className="p-2 bg-blue-600 rounded-r-lg">Subscribe</button>
          </form>
          <div className="text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;