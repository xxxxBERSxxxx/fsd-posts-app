import React, {createContext, useContext, useEffect, useState} from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children:React.ReactNode}> = ({children}) => {
    const[theme, setTheme] = useState<Theme>('light');

useEffect(()=>{
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
}, [theme]);

const toggleTheme = () =>  setTheme(prev =>(prev === 'light' ? 'dark' : 'light'));

const value = {theme, toggleTheme, setTheme};

return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
);
};

export const useTheme = () =>{
    const context = useContext(ThemeContext);
    if (!context){
      throw new Error('Параметр useTheme должен использоваться внутри ThemeProvider.');  
    }
    return context;
}

