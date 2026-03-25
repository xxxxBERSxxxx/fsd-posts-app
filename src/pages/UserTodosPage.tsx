import { useParams } from "react-router-dom";
import UserTabs from "../widgets/UserTabs/UserTabs";
import TodoList from '../widgets/TodoList/TodoList';

const UserTodosPage = ()=>{
    const { id } = useParams<{ id:string }>();
    const userId = Number(id);

    return (
        <div>
            <UserTabs userId={userId} />
            <TodoList userId={userId} />
        </div>
    );
};

export default UserTodosPage;


