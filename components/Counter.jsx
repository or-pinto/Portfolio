'use client'
import { useState, useEffect, useRef } from "react";

const easing = (t) => {
    return 1 - Math.pow(1 - t, 3); // Cubic easing function
}

const intrp = (a, b, t) => {
    return a + (b - a) * easing(t); // Use easing style for interpolating alpha value
}

const formatNumber = (num) => {
    // None of the numbers exceed the millions... for now...
    if (num >= 1e6) {
        let n = (num / 1e6).toFixed(1);
        n = n.endsWith('.0') ? n.slice(0, -2) : n;
        return n + 'M';
    }
    if (num >= 1e3) {
        let n = (num / 1e3).toFixed(1);
        n = n.endsWith('.0') ? n.slice(0, -2) : n;
        return n + 'K';
    }
    return num.toString();
}

export default function Counter({ start, end, duration = 3 }) {
    // Interpolates from start to end with an easing style
    // defaulting to some easing behavior.

    const [number, setNumber] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        let observer;
        if (ref.current) {
            observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setHasAnimated(true);
                    } else {
                        setHasAnimated(false);
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(ref.current);
        }
        return () => {
            if (observer && ref.current) observer.unobserve(ref.current);
        };
    }, []);

    useEffect(() => {
        if (!hasAnimated) return;
        setNumber(start);
        const startTime = Date.now();
        const endTime = startTime + duration * 1000; // Convert ms to seconds
        const intv = setInterval(() => {
            setNumber(() => {
                return Math.floor(
                    intrp(start, end, (Date.now() - startTime) / (endTime - startTime))
                ); // Compute percent completed
            });
            if (Date.now() >= endTime) {
                clearInterval(intv); // Clean interval
                setNumber(end);
            }
        }, 1000 / 60); // 60 FPS

        return () => {
            if (intv) {
                clearInterval(intv);
            }
        };
    }, [hasAnimated, start, end, duration]);

    return (
        <span ref={ref}>
            {formatNumber(number)}
        </span>
    );
}