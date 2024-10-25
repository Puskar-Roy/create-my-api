import React from 'react';

/**
 * TerminalCard Component
 * 
 * Renders a terminal-like interface with a mock command-line session.
 * This component is styled using Tailwind CSS classes.
 *
 * Features:
 * - Terminal header with red, yellow, and green action buttons
 * - Bash terminal label
 * - Example command-line interaction with prompts and responses
 */
const TerminalCard = () => {
  return (
    <div className="z-10">
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
        {/* Terminal Header */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-sm text-gray-400">bash</p>
        </div>

        {/* Terminal Body */}
        <div className="mt-4">
          <p className="text-green-400">$ npx create-my-api@latest</p>
          <p className="text-white">+ next@10.2.3</p>
          <p className="text-white">
            <span className="text-cyan-200">?</span> What is your project named? › <span className="text-green-300">backend</span>
          </p>

          {/* Additional commands (commented out) */}
          {/* 
            <p className="text-white">🔄 Select a Service:</p>
            <p className="text-cyan-200">› Starter API</p>
            <p className="text-white">› Existing API</p>
            <p className="text-white">
              <span className="text-cyan-200">?</span> 🚀 Select a Backend Technology:
            </p> 
          */}

          {/* Placeholder for next command */}
          <p className="text-green-400">$</p>
        </div>
      </aside>
    </div>
  );
};

export default TerminalCard;
