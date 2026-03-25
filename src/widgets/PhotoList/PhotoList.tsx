import React from 'react';
import { useGetPhotosByAlbumQuery } from '../../entities/photo/api/photosApi';

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
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;