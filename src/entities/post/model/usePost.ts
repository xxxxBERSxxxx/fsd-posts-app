import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

// Моковые данные для примера
const MOCK_POSTS: Post[] = [
  { id: 1, title: 'Первый пост', body: 'Содержимое первого поста...' },
  { id: 2, title: 'Второй пост', body: 'Содержимое второго поста...' },
  { id: 3, title: 'Третий пост', body: 'Содержимое третьего поста...' },
];

export const usePost = (postId: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Имитация загрузки
    setTimeout(() => {
      const found = MOCK_POSTS.find(p => p.id === postId) || null;
      setPost(found);
      setIsLoading(false);
    }, 500);
  }, [postId]);

  return { post, isLoading };
};