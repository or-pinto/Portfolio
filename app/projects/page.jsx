import React from 'react'
import Project from '@/components/Project.jsx'
import { projects } from '@/lib/projects.js'

export default function page(params) {
    return (
        <>
            <div className='flex flex-col w-full mx-auto items-center min-h-screen h-auto bg-background border-t border-border pb-36'>
                <div className='flex flex-col w-[600px] max-w-[90%]'>
                    <p className='text-center font-extrabold pt-36 text-5xl'>Projects<span className='text-primary'>:</span></p>
                    <p className='text-center font-normal pt-16 text-md text-text_secondary px-4'>
                        Some of my projects are listed here, but remember, I have much more experience than just that.<br/>
                    </p>

                    {
                        projects ? projects.map((project, index) => {
                            return (
                                <Project 
                                    key={index} // Assign unique prop-key
                                    name={project.name} 
                                    date={project.date}
                                    content={project.content}
                                    usage={project.usage}
                                    aiassistance={project.aiassistance || 0} // Default to 0 if not provided
                                    link={project.link}
                                />
                            )
                        }) : "Failed to retrieve projects from module." 
                        // Create the project component for current project
                    } 
                </div>
            </div>
        </>
    );
};
