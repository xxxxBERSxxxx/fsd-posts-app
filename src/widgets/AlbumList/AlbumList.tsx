import React from 'react';
import { useGetAlbumsByUserQuery } from '../../entities/album/api/albumsApi'; 

interface AlbumListProps {
  userId: number;
}

const AlbumList: React.FC<AlbumListProps> = ({ userId }) => {
  const { data: albums = [], isLoading, error } = useGetAlbumsByUserQuery(userId);

  if (isLoading) return <div>Загрузка альбомов...</div>;
  if (error) return <div>Ошибка загрузки альбомов</div>;

  return (
    <div>
      <h3>Альбомы пользователя {userId}</h3>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <a href={`/albums/${album.id}/photos`}>{album.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;