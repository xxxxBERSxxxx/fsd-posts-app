import React, { useState, useCallback } from 'react';
import styles from './PostLengthFilter.module.css'; 

interface PostLengthFilterProps {
  minLength: number;
  onFilterChange: (minLength: number) => void;
}

const PostLengthFilter: React.FC<PostLengthFilterProps> = ({ minLength, onFilterChange }) => {
  const [value, setValue] = useState(minLength);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onFilterChange(newValue);
  }, [onFilterChange]);

  return (
    <div className={styles.filter}>
      <label htmlFor="title-length">Минимальная длина заголовка: {value}</label>
      <input
        id="title-length"
        type="range"
        min="0"
        max="50"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default React.memo(PostLengthFilter);