import Image from "next/image";
import { getBasePath } from '@/lib/getBasePath';
import Link from "next/link";

export default function page(params) {
    return (
        <>
            <div className='flex flex-col w-full mx-auto items-center min-h-screen h-auto bg-background border-t border-border pb-36'>
                <div className='flex flex-col w-[600px] max-w-[90%]'>
                    <p className='text-center font-extrabold pt-36 text-5xl'>Contact Me<span className='text-primary'>:</span></p>
                    <p className='text-center font-normal pt-16 text-md text-text_secondary px-4'>
                        Don't hesitate to get in touch, I try to respond to the best of my abilities, and as quickly as possible!<br/>
                    </p>
                </div>

                <div className='w-full max-w-[90vw] h-24 mt-3 flex flex-row justify-center items-center gap-3'>
                    {
                      [
                        {
                          name: "GitHub",
                          link: "https://github.com/or-pinto"
                        },

                        {
                          name: "LinkedIn",
                          link: "https://www.linkedin.com/in/or-pinto-815028319/"
                        },
                      ].map( (value, index) => {
                        return <Link href={value.link} className='px-2 py-1 bg-foreground_third border border-border rounded-md flex gap-1 hover:bg-foreground_secondary duration-75'>
                          <Image src={getBasePath() + "/Logos/" + value.name + ".svg"} width={24} height={24} alt={value.name}/>
                          <span className='inline'>{value.name}</span>
                        </Link>
                      } )
                    }
                </div>

                <form>
                    <div className='flex flex-col gap-6 justify-center w-[600px] max-w-[90vw] h-auto px-5 py-10'>
                        <p className='text-center font-normal text-md text-text_secondary px-4 -mt-6'>
                          If you'd like, you can directly send me a message!<br/>
                      </p>
                        {/* Name field with floating label, stays at top if has value */}
                        <div className="relative">
                          <input
                            className="focus:ring-foreground peer px-4 py-2.5 rounded-md bg-background text-foreground_primary ring-2 ring-border text-lg w-full placeholder-transparent focus:outline-none"
                            name="name"
                            id="name"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-1 -translate-y-1/2 text-text_secondary pointer-events-none transition-all duration-200
                              peer-focus:-top-0 peer-focus:text-base peer-focus:text-foreground
                              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-text_secondary
                              peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-base peer-not-placeholder-shown:text-foreground
                              bg-background px-3 font-semibold"
                          >
                            Who are you?
                          </label>
                        </div>

                        {/* Email field with floating label, stays at top if has value */}
                        <div className="relative">
                          <input
                            className="focus:ring-foreground peer px-4 py-2.5 rounded-md bg-background text-foreground_primary ring-2 ring-border text-lg w-full placeholder-transparent focus:outline-none"
                            name="email"
                            id="email"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-1  -translate-y-1/2 text-text_secondary pointer-events-none transition-all duration-200
                              peer-focus:-top-0 peer-focus:text-base peer-focus:text-foreground
                              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-text_secondary
                              peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-base peer-not-placeholder-shown:text-foreground
                              bg-background px-3 font-semibold"
                          >
                            What's your email?
                          </label>
                        </div>

                        {/* Message field with floating label, stays at top if has value */}
                        <div className="relative">
                          <textarea
                            className="focus:ring-foreground peer px-4 py-2.5 rounded-md bg-background text-foreground_primary ring-2 ring-border text-lg w-full placeholder-transparent focus:outline-none h-36 resize-none"
                            name="message"
                            id="message"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="message"
                            className="absolute left-1 -translate-y-1/2 text-text_secondary pointer-events-none transition-all duration-200
                              peer-focus:-top-0 peer-focus:text-base peer-focus:text-foreground
                              peer-placeholder-shown:top-7 peer-placeholder-shown:text-lg peer-placeholder-shown:text-text_secondary
                              peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-base peer-not-placeholder-shown:text-foreground
                              bg-background px-3 font-semibold"
                          >
                            Type your inquiry...
                          </label>
                        </div>

                        <button className='bg-primary py-2 rounded-md text-xl duration-200 font-semibold hover:brightness-90 ring-2 ring-primary group shadow-[0_0_15px_4px_var(--primary)] hover:shadow-[0_0_20px_12px_var(--primary),0_0_0_4px_rgba(0,0,0,0.10)] transform'>
                          Send
                          <Image src={getBasePath() + "/Icons/envelope.svg"} width={20} height={20} className='inline ml-3 -translate-y-0.5 group-hover:translate-x-3 group-hover:rotate-90 duration-200' />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
