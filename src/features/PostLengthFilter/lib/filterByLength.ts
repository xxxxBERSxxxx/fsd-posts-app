



interface Post {
    id: number;
    title: string;
    body: string;
}

export const filterByLength = (posts: Post[], minLength: number): Post[] => {
    return posts.filter(post => post.title.length >= minLength);
};
