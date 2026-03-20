import { useState, useEffect } from "react";

interface Post {
    id:number;
    title:string;
    body:string;
    userId?: number;
}

const MOCK_POSTS: Post[] = [
  { id: 1, title: 'Первый пост', body: 'Содержимое первого поста...', userId: 1 },
  { id: 2, title: 'Второй пост', body: 'Содержимое второго поста...', userId: 1 },
  { id: 3, title: 'Третий пост', body: 'Содержимое третьего поста...', userId: 2 },
];

interface UsePostsOptions {
    userId?: number;
    enabled?: boolean;
}

export const usePosts = ({userId, enabled = true}: UsePostsOptions = {}) =>{
 const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        if(!enabled) return;

const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);

try{
    await new Promise(resolve =>setTimeout(resolve, 500));

let data = MOCK_POSTS;
if(userId !== undefined){
    data = data.filter(post =>post.userId === userId);
}
setPosts(data);
}catch(err){
    setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
}finally{
    setIsLoading(false);
}
};
fetchPosts();
    }, [userId, enabled]);
    return { posts, isLoading, error};
};


