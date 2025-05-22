import { useEffect, useState } from "react";
import { Sun,Moon } from "lucide-react";
import {cn} from "@/lib/utils.js";

export const ThemeToggle=()=>{
    const [isDarkMode, SetIsDarkMode]=useState(false);

    useEffect(()=>{
        const StoredTheme=localStorage.getItem("theme");
        if(StoredTheme==='dark'){
            SetIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }else{
            localStorage.setItem("theme","light");
            SetIsDarkMode(false);
        }
    },[]);

    const ToggleTheme=()=>{
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            SetIsDarkMode(false);
            localStorage.setItem("theme","light");
            
        }else{
            document.documentElement.classList.add('dark');
            SetIsDarkMode(true);
            localStorage.setItem("theme","dark");
        }
    }

    return ( 
        <button onClick={ToggleTheme}
        className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-none"
        )}


        >
            {isDarkMode?(
                <Sun className='text-yellow-300 ' />
            ):(
                <Moon className='text-blue-400' />
            )}
                
                
        </button>
    );

};