import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import * as api from '../../services/api';
import jwtDecode from "jwt-decode";
import ProfilePhoto from "../../components/Profile/ProfilePhoto";

import classes from './EditPage.module.css';
import { User } from "../../types/User";
import EditDetails from "../../components/EditDetails/EditDetails";

type JwtEmailDecoded = {
    email: string;
}

const EditPage = () => {
    const [user, setUser] = useState<User | null>(null);

    const token = Cookies.get('token');

    useEffect(() => {

        const decodedToken: JwtEmailDecoded = jwtDecode(token!);

        const fetchUsers = async () => {
            await api.getUser(decodedToken.email).then((res) => setUser(res));
        }

        fetchUsers();
    }, [token]);

    return (
        <>
            <Header home={false} />
            <div className={classes.content}>
                <ProfilePhoto user={user!} edit={true}/>
                <EditDetails user={user!} />
            </div>
            <Footer />
        </>
    )
}

export default EditPage;