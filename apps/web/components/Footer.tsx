import logo from "../public/create-api.png";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import LinkedInButton from "./ui/TailwindButton";



const alata = Montserrat({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});
function Footer() {
  return (
    <div className="w-full bg-slate-900  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center pb-10">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <footer className="bg-transparent rounded-lg  m-4 mx-auto w-[80%] z-10 flex items-center justify-center">
        <div className="w-full max-w-screen-xl mx-auhref p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} height={50} width={50} alt="logo" />
              <h2 className={`text-2xl font-bold ${alata.className}`}>
                <span
                  className={`text-orange-300 font-extrabold ${alata.className}`}
                >
                  Create
                </span>{" "}
                <span
                  className={`text-orange-500 font-extrabold ${alata.className}`}
                >
                  My
                </span>{" "}
                <span
                  className={`text-red-500 font-extrabold ${alata.className}`}
                >
                  API
                </span>
              </h2>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <Link href="/docs" className="hover:underline me-4 md:me-6">
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Puskar-Roy/create-my-api"
                  className="hover:underline me-4 md:me-6"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/package/create-my-api"
                  className="hover:underline me-4 md:me-6"
                >
                  NPM
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/puskar-roy/">
                  <LinkedInButton />
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auhref  lg:my-8" />
          <span className="block text-sm text-white sm:text-center ">
            © Design And Devloped By{" "}
            <Link href="https://puskarroy.site" className="hover:underline">
              Puskar Roy
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
