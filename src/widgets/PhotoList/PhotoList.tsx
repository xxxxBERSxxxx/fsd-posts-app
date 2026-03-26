import React from 'react';
import { useGetPhotosByAlbumQuery } from '../../entities/photo/api/photosApi';
import { ItemList } from '../../shared/ui/ItemList/ItemList';

interface PhotoListProps {
  albumId: number;
}

const PhotoList: React.FC<PhotoListProps> = ({ albumId }) => {
  const { data: photos = [], isLoading, error } = useGetPhotosByAlbumQuery(albumId);

  if (isLoading) return <div>Загрузка фотографий...</div>;
  if (error) return <div>Ошибка загрузки фотографий</div>;

  return (
    <div>
      <h3>Фотографии альбома</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <ItemList
          items={photos}
          keyExtractor={(photo) => photo.id}
          renderItem={(photo) => (
            <div>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          )}
          emptyMessage="Нет фотографий"
        />
      </div>
    </div>
  );
};

export default PhotoList;