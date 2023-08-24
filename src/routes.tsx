import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import Home from './pages/Home/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/profiles' element={isAuthenticated() ? <ProfilePage /> : <Navigate to='/' />} />
        </Route>
    )
);

export default function Router() {
    return <RouterProvider router={router} />
}