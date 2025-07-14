import { Encode_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import Image from "next/image";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Or Pinto - Full Stack Developer",
  description: "Or Pinto's portfolio.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${encodeSans.variable} antialiased`}
      >
        <nav className='flex justify-between backdrop-contrast-125 align-middle w-screen h-20 backdrop-blur-md bg-none border-b border-b-border fixed z-10 px-8'>
          <div className='space-x-6 h-full w-24 flex justify-left items-center'>
            {
              ['Home', 'Projects'].map((value, key) => {
                const path = value === 'Home' ? '/' : `/${value.toLowerCase()}`; // Home automatically redirects to root
                return (
                  <Link href={path} key={key}>
                    <button className={'group flex-row gap-2 items-center justify-center bg-border rounded-md px-1 w-12 sm:w-fit sm:px-8 h-12 self-center hover:bg-primary duration-150 flex'}>
                      <Image src={"/Icons/" + value + ".svg"} width="20" height="20" className='sm:group-hover:mr-2 duration-200' alt=""/>
                      <span className='hidden sm:block'>{value}</span>
                    </button>
                  </Link>
                ); // Map each link to its unique button
              })
            }
          </div>

          <div className= 'h-full flex space-x-5 justify-end align-middle'>
            <Link href="/contact" className='group flex-row gap-2 items-center justify-center rounded-md self-center bg-primary px-5 h-12 flex duration-200 hover:shadow-[0_0_20px_12px_var(--primary),0_0_0_4px_rgba(0,0,0,0.10)] hover:brightness-90 shadow-[0_0_24px_4px_var(--primary)]'>
              <Image src="/Icons/contact_me.svg" width="20" height="20" className='group-hover:rotate-45 duration-200' alt=""/>
              <span className='hidden sm:block'>Contact Me</span>
            </Link>
          </div>


        </nav>

        {children}

        <div className='w-full h-60 bg-background border-t border-border flex justify-center align-middle'>
          <p className='self-center text-text_secondary font-normal text-md'>Developed by Or Pinto, without using AI.</p>
        </div>
      </body>
    </html>
  );
}
