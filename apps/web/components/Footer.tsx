import logo from "../public/create-api.png"; 
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import LinkedInButton from "./ui/TailwindButton";
import React, { useState } from 'react'; // Import useState for modal state
import ContactForm from './ContactForm'; // Import the ContactForm component

const alata = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="w-full bg-slate-900 h-[50vh] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center pb-10">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <footer className="bg-transparent rounded-lg m-4 mx-auto w-[80%] z-10 flex items-center justify-center">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src={logo} height={50} width={50} alt="logo" />
                            <h2 className={`text-2xl font-bold ${alata.className}`}>
                                <span className="text-orange-300 font-extrabold">Create</span>{" "}
                                <span className="text-orange-500 font-extrabold">My</span>{" "}
                                <span className="text-red-500 font-extrabold">API</span>
                            </h2>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                            {[
                                { href: "/docs", label: "Docs" },
                                { href: "https://github.com/Puskar-Roy/create-my-api", label: "Github" },
                                { href: "https://www.npmjs.com/package/create-my-api", label: "NPM" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:underline me-4 md:me-6">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a href="#" onClick={openModal} className="hover:underline me-4 md:me-6">Contact</a> {/* Contact link */}
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/puskar-roy/">
                                    <LinkedInButton />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <span className="block text-sm text-white sm:text-center">
                        © Designed and Developed By{" "}
                        <Link href="https://puskarroy.site" className="hover:underline">
                            Puskar Roy
                        </Link>
                    </span>
                </div>
            </footer>
            {isModalOpen && <ContactForm onClose={closeModal} />} {/* Render the ContactForm if modal is open */}
        </div>
    );
}

export default Footer;
