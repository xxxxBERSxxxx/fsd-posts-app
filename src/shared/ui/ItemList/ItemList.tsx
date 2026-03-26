import React from 'react';
import styles from './ItemList.module.css';

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string | number;
  emptyMessage?: React.ReactNode;
  className?: string;
}

export function ItemList<T>({
  items,
  renderItem,
  keyExtractor,
  emptyMessage = 'Нет данных',
  className,
}: ItemListProps<T>) {
  if (items.length === 0) {
    return <div className={styles.empty}>{emptyMessage}</div>;
  }

  return (
    <div className={`${styles.list} ${className || ''}`}>
      {items.map((item, index) => (
        <div key={keyExtractor(item, index)}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}