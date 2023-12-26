import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Subgrid } from './components/gird/grid';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    
  },
  {
    path:'/grid',
    element:<Subgrid/>
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
