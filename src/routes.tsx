import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/profiles' element={<ProfilePage/>} />
        </Route>
    )
);

export default function Router() {
    return <RouterProvider router={router} />
}