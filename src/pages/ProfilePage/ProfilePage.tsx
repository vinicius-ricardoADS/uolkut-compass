import classes from './ProfilePage.module.css';
import ProfilePhoto from '../../components/Profile/ProfilePhoto';
import EditProfile from '../../components/EditProfile/EditProfile';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import CommunitySection from '../../components/Community/CommunitySection';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FriendsSection from '../../components/Friends/FriendsSection';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import * as api from '../../services/api';
import { User } from '../../types/User';

type JwtEmailDecoded = {
    email: string;
}

function ProfilePage() {
    const [windowSize, setWindowSize] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const token = Cookies.get('token');

    if (token) {
        const decodedToken: JwtEmailDecoded = jwtDecode(token);
        console.log(decodedToken.email);
    }

    const handleResize = () => {
        setWindowSize(window.innerWidth < 950);
    };


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        const decodedToken: JwtEmailDecoded = jwtDecode(token!);

        const fetchUsers = async () => {
            await api.getUser(decodedToken.email).then((res) => setUser(res));
        }

        fetchUsers()
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [token]);

    return(
        <> 
            <Header home={false}/>
            {windowSize ? (
                <div className={classes.content}>
                    <div className={classes.profile}>
                        <ProfilePhoto user={user!} />
                        <EditProfile />
                    </div>

                    <FriendsSection />
                    
                    <div className={classes.social}>
                        <ProfileDetails user={user!} />
                        <CommunitySection />
                    </div>
                </div>
            ) : (
                <div className={classes.content}>
                    <div className={classes.profile}>
                        <ProfilePhoto user={user!} />
                        <EditProfile />
                    </div>

                    <ProfileDetails user={user!} />

                    <div className={classes.social}>
                        <FriendsSection />
                        <CommunitySection />
                    </div>
                </div>
            )} 
            <Footer />
        </>
    )
}

export default ProfilePage