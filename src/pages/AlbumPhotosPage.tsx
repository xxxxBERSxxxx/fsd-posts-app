import { useParams } from "react-router-dom";
import PhotoList from '../widgets/PhotoList/PhotoList';

const AlbumPhotosPage =() =>{
    const { id } = useParams<{ id: string}>();
    const albumId = Number(id);

    return (
        <div>
<h2>Фотографии альбома</h2>
<PhotoList albumId = {albumId} />
        </div>
    );
};

export default AlbumPhotosPage;