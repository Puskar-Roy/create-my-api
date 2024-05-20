import React from 'react'

const TerminalCard = () => {
  return (
    <div className="z-10">
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ npx create-my-api@latest</p>
          <p className="text-white">+ next@10.2.3</p>
          <p className="text-white">
            {" "}
            <span className="text-cyan-200">?</span> What is your project named?
            › backend
          </p>
          {/* <p className="text-white">🔄 Select a Service:</p>
          <p className="text-cyan-200">› Starter API</p>
          <p className="text-white">› Existing API</p>
          <p className="text-white">
            {" "}
            <span className="text-cyan-200">?</span> 🚀 Select a Backend
            Technology:
          </p> */}
          <p className="text-green-400">$</p>
        </div>
      </aside>
    </div>
  );
}

export default TerminalCard;
