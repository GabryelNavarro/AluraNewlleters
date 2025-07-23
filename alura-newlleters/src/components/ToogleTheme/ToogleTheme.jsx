import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToogleTheme = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Confere se tema já está escuro ao carregar
        const root = document.documentElement;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const hasClassDark = root.classList.contains("dark");

        if (prefersDark || hasClassDark) {
            root.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.toggle("dark");
        setIsDark(prev => !prev);
    };

    return (
        <div className="hidden sm:block">
            {isDark ? (
                <SunIcon className="h-8 text-yellow-300 cursor-pointer" onClick={toggleTheme} />
            ) : (
                <MoonIcon className="h-8 text-blue-700 cursor-pointer" onClick={toggleTheme} />
            )}
        </div>
    );
};

export default ToogleTheme;
