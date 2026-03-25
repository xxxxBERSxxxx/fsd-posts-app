import React from "react";
import {useTheme} from '../../../shared/lib/theme/ThemeContext';
import Button from '../../../shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher: React.FC = ()=>{
    const {theme, setTheme} = useTheme();

return (
    <>
    <Button
    onClick = {()=>setTheme('light')}
    className={theme === 'light' ? styles.active : ''}
    >Светлая
    </Button>

<Button
onClick={()=>setTheme('dark')}
className={theme === 'dark' ? styles.active : ''}
>Темная
</Button>
    </>
);
};

export default ThemeSwitcher;












