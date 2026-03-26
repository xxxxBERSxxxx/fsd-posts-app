import React from 'react';
import { useGetAlbumsByUserQuery } from '../../entities/album/api/albumsApi';
import { ItemList } from '../../shared/ui/ItemList/ItemList';

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
      <ItemList
        items={albums}
        keyExtractor={(album) => album.id}
        renderItem={(album) => (
          <a href={`/albums/${album.id}/photos`}>{album.title}</a>
        )}
        emptyMessage="Нет альбомов"
      />
    </div>
  );
};

export default AlbumList;