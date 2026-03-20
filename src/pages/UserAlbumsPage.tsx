import { useParams } from "react-router-dom";
import AlbumList from '../widgets/AlbumList/AlbumList';

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
