import { useParams } from "react-router-dom";
import AlbumList from '../widgets/AlbumList/AlbumList';
import UserTabs from '../widgets/UserTabs/UserTabs';

const UserAlbumsPage =()=> {
    const {id} = useParams<{id:string}>();
    const userId = Number(id);

return (
    <div>
        <UserTabs userId={userId} />
        <AlbumList userId={userId} />
    </div>
);

};

export default UserAlbumsPage;
