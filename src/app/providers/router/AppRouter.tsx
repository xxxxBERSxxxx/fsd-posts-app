import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../../../shared/layouts/MainLayout';
import PostsPage from '../../../pages/PostsPage';
import PostDetailsPage from '../../../pages/PostDetailsPage';
import UserAlbumsPage from '../../../pages/UserAlbumsPage';
import AlbumPhotosPage from '../../../pages/AlbumPhotosPage';
import UserTodosPage from '../../../pages/UserTodosPage';
import UserPostsPage from '../../../pages/UserPostsPage';




const router  = createBrowserRouter([
    {
     path: '/',
     element:< MainLayout />,
     children: [
       { index: true, element: <PostsPage />},
       {path: 'posts', element:<PostsPage />},
       {path: 'posts/:id', element:<PostDetailsPage />},
      {path: 'users/:id/posts', element:<UserPostsPage />},
      {path:'users/:id/albums', element:<UserAlbumsPage  />},
    { path: 'albums/:id/photos', element: <AlbumPhotosPage /> },
      { path: 'users/:id/todos', element: <UserTodosPage /> },   
     ],  
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;



