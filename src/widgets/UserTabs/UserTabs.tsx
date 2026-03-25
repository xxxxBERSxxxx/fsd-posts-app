import { NavLink } from "react-router-dom";
import styles from './UserTabs.module.css';

interface UserTabsProps{
    userId: number;
}

const UserTabs = ({userId} : UserTabsProps)=>{
    return (
        <div className={styles.tabs}>
<NavLink 
to={`/users/${userId}/posts`}
className={({isActive}) => (isActive ? styles.active : '')}
>
    Посты
</NavLink>
<NavLink 
to={`/users/${userId}/albums`}
className={({isActive}) =>(isActive ? styles.active : '')}
>
Альбомы
</NavLink>
<NavLink
to={`/users/${userId}/todos`}
className={({isActive})=>(isActive ? styles.active : '')}
>
Задачи
</NavLink>
 </div>
    );
};

export default UserTabs;