import Image from "next/image";
import { getBasePath } from '@/lib/getBasePath';
import Link from "next/link";

import Project from "@/components/Project.jsx"
import Typewriter from "@/components/Typewriter.jsx";
import Experience from "@/components/Experience.jsx";
import CommandPrompt from "@/components/CommandPrompt";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <>
      <div className='w-full flex flex-col justify-center gap-24 lg:flex-row items-center w-full min-h-screen h-auto transition-all duration-500 px-10 py-36 lg:pt-0'>
        {/* Left side */}
        <div className='w-[500px] max-w-full'>
          <h1 className='text-4xl font-extrabold ml-0 '>Or Pinto</h1>
          <br/>
          <h2 className='-mt-6 text-lg text-text_secondary ml-0 font-medium'>Full Stack Developer, AI Researcher</h2>
          <br/>
          <h3 className='-mt-5 text-text_third font-medium ml-0 '>
            <Typewriter text="Together we can make this world a better place."/>|
          </h3>
        </div>

        {/* Right side */}
        <div className=''>
          <CommandPrompt/>
        </div>
      </div>

      <div className='flex flex-col items-center min-h-screen h-auto bg-background border-t border-border px-10'>
          {/* Me section */}
          <p className='text-center font-extrabold pt-36 text-5xl'>Me<span className='text-primary'>:</span></p>
          <p className='text-center font-normal pt-16 text-md text-text_secondary'>
            Hi! I am Or Pinto, a 17 year old Full Stack Developer & AI Researcher from Israel.<br/>
          </p>

          <div className='flex flex-col justify-start md:flex-row md:justify-center items-center gap-10 w-full h-fit  mt-10'>
            {
              [
                {
                  name: "Visits",
                  value: "100000000",
                  duration: 2,
                  suffix: "+",
                  description: "Number of visits in 3D Games I have programmed."
                },

                {
                  name: "Commissions",
                  value: "7400",
                  duration: 2,
                  suffix: " NIS",
                  description: "Minimum amount I earned in commissions as a teenager freelancer, about ~$2,200 USD."
                },

                {
                  name: "Experience",
                  value: "5",
                  duration: 0.3,
                  suffix: " Years",
                  description: "Active professional experience as a programmer."
                },
              ].map((value, index) => {
                return <div key={index} className='group flex flex-col items-center justify-center bg-foreground_third border-border border px-2 py-3 rounded-md w-36'>
                  <span className='text-text_third text-sm font-semibold'>{value.name}</span>
                  <div>
                    <Counter start={0} end={value.value} duration={value.duration}/>
                    {value.suffix}
                  </div>

                  <div className='backdrop-blur-[2px] border border-border translate-y-[calc(50%+20px)] w-48 px-3 py-2 rounded-md h-auto opacity-0 group-hover:opacity-100 duration-200 absolute text-left pointer-events-none'>
                    {value.description}
                  </div>
                  
                </div>
              })
            }
          </div>

          {/* Projects section */}
          <p className='text-center font-extrabold pt-36 text-5xl'>Projects<span className='text-primary'>:</span></p>

          <div className='w-[600px] max-w-[100%]'>

            <Project
              link="https://github.com/ExpDev-mul/Assembler"
              name="Assembler"
              period="April 2025"
              usage={["C", "Linux"]}
              aiassistance={1}
              content="An assembler that translates a custom assembly language into 24-bit machine code in hexadecimal form. Supports variable declarations, labels, macros, and a comprehensive instruction set."
            />

            <Project
              link="https://github.com/ExpDev-mul/Alzheimer-CNN"
              name="Alzheimer CNN"
              period="March 2025"
              usage={["Python", "TensorFlow", "Keras"]}
              aiassistance={4}
              content="A convolutional neural network model designed for classifying multiclass stages of Alzheimer’s disease using medical imaging data through deep learning with TensorFlow."
            />

            

            <div className='flex items-center justify-center w-full h-12 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.05)] -translate-y-12 rounded-md'>
              <Link 
                className='font-bold border-b-2 border-b border-b-gray-400 hover:border-b-gray-100'
                href="/projects"
              >See More</Link>
            </div>
          </div>
          


          {/* Technologies section */}
          <p className='text-center font-extrabold pt-36 text-5xl'>Technologies<span className='text-primary'>:</span></p>
          <div className='mt-20 max-w-[95%] self-center h-auto grid grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 mb-36'>
              {
                ['Next', 'React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'PHP', 'MySQL', 'Express', 'MongoDB', 'Tailwind CSS', 'Lua', 'Java', 'C++', 'Python', 'GitHub', 'Visual Studio Code'].map((value, index) => {
                  return <button key={index} className='flex md:w-52 h-10 px-2 rounded-md bg-foreground_third border border-border lg:w-60'>
                    <Image src={getBasePath() + '/Logos/' + value + '.svg'} width='25' height='25' className='' alt='Display'/>
                    <p className='self-center w-full text-right px-2 font-bold hidden md:block'>{value}</p>
                  </button>
                })
              }
          </div>

          {/* Fourth section */}
          <p className='text-center font-extrabold pt-24 text-5xl mb-10'>Experience<span className='text-primary'>:</span></p>
          <div className='w-[500px] max-w-[100%] h-auto pb-6 gap-6 rounded-md self-center mb-36 flex flex-col box-shadow-lg bg-background'>
              <Experience
                name="Software Developer"
                company="Windward"
                description="
                R&D department at Windward, the global leader in Maritime Intelligence and Risk solutions, trusted by leading corporations, government agencies, and international organizations.
                "
                period="July 2024 - present"
                image_type="jpg"
              />

              <Experience
                name="Game Developer"
                company="BlockUp"
                description="
                Contracted as the sole programmer developing 'The Party', an innovative 3D multiplayer story-driven game.
                "
                period="Aug 2023 - Jan 2024"
                image_type="jpg"
                up_arrow={true}
              />

              <Experience
                name="Game Developer"
                company="Freelancer"
                description="
                 Engineered high-quality software solutions across diverse client projects, encompassing end-to-end game development and infrastructure support.
                "
                period="Sep 2022 - Aug 2023"
                image_type="svg"
                up_arrow={true}
              />
          </div>
      </div> 
    </> 
  );
}