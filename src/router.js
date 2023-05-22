import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { HomePage } from './pages/HomePage/index.js';
import {Counter} from './pages/Counter/counter.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/counter",
        element: <Counter />,
    }
])
export default function SiteRouter() {
    return(
        <RouterProvider router={router} />
    )
}