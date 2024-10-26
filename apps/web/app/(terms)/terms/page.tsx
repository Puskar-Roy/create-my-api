import React from "react";
import Image from "next/image";
import logo from "../../../public/create-api.png";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center flex-col items-center text-base sm:text-lg text-slate-300 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 w-full min-h-screen p-0 m-0">
      <div className="w-full bg-slate-900 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] rounded-lg shadow-xl">
        <div className="relative flex items-center justify-center p-4 sm:p-8">
          <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="mt-8 mb-8 relative z-10 flex flex-col items-center gap-6">
            <Image src={logo} height={100} width={100} alt="Logo" className="drop-shadow-md" />
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-4 sm:mb-8 tracking-wider">Terms and Conditions</h1>

            <div className="text-left text-slate-300 space-y-6 max-w-xl sm:max-w-3xl">
              <p>Welcome to Create My API! These terms and conditions outline the rules and regulations for the use of our website.</p>

              <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Acceptance of Terms</h2>
              <p>By accessing this website, you accept these terms and conditions in full. Do not continue to use Create My API if you do not accept all of the terms stated on this page.</p>

              <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">License</h2>
              <p>Unless otherwise stated, Create My API and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved.</p>

              <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Limitations</h2>
              <p>In no event shall Create My API be liable for any damages arising out of the use or inability to use the materials on this website.</p>

              <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Changes to the Terms</h2>
              <p>We reserve the right to update these terms at any time. Your continued use of the site will be deemed acceptance of the updated terms.</p>
            </div>

            <Link
              href="/"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg text-white font-semibold hover:scale-110 duration-200 hover:shadow-lg mt-8"
            >
              Go Home 🚀
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
