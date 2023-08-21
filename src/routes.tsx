import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home/>}/>
        </Route>
    )
);

export default function Router() {
    return <RouterProvider router={router} />
}