import { useEffect, useRef, useState } from "react";
import "./progressBar.css";

export default function ProgressBar({ per, skill }) {
    const progressBarRef = useRef(null);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const progressBar = progressBarRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBar.classList.add('animate');
                    animateProgressBar();
                } else {
                    setPercentage(0);
                    progressBar.classList.remove('animate');
                }
            });
        });

        observer.observe(progressBar);

        return () => {
            observer.unobserve(progressBar);
        };
    }, []);

    const animateProgressBar = () => {
        let counter = 0;
        const interval = setInterval(() => {
            if (counter >= per*100) {
                clearInterval(interval);
            } else {
                counter++;
                setPercentage(counter);
            }
        }, 25);
    };

    return (
        <div className="progress-bar-container flex">
            <p>{skill}</p>
            <div 
                className="progress-bar animate" ref={progressBarRef} 
                // @ts-ignore
                style={{'--percentage': percentage/100}}
            >
                <div className="percentage flex">
                    <span className="percentage-number">{percentage}%</span>
                </div>
            </div>
        </div>
    );
}
