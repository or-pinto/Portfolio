'use client'
import React, { useEffect, useState } from "react";

export default function Typewriter(params) {
    const { text } = params; // Extract text from params

    // States
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    // Effect to handle typewriter effect
    useEffect(() => {
        let debounce = false
        const interval = setInterval(() => {
            if (debounce) return
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            } else {
                // Init again
                debounce = true
                setTimeout(() => {
                    debounce = false
                    setDisplayedText("")
                    setIndex(0);
                }, 1000);
            }
        }, 50); // Adjust the speed here (in milliseconds)

        return () => clearInterval(interval);
    }, [index, displayedText]);

    return (
        <>
            {displayedText}
        </>
    );
};
