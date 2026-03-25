import { useParams } from "react-router-dom";
import UserTabs from '../widgets/UserTabs/UserTabs';
import PostList from "../widgets/PostList/PostList";

const UserPostsPage = () =>{
    const { id } = useParams<{ id: string}>();
    const userId = Number(id);

    return (
        <div>
            <UserTabs userId={userId} />
            <PostList userId={userId} />
        </div>
    );
};

export default UserPostsPage;