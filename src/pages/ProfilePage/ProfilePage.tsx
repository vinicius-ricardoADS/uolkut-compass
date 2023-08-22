import classes from './ProfilePage.module.css';
import ProfilePhoto from '../../components/Profile/ProfilePhoto';
import EditProfile from '../../components/EditProfile/EditProfile';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import CommunitySection from '../../components/Community/CommunitySection';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FriendsSection from '../../components/Friends/FriendsSection';
import { useState, useEffect } from 'react';

function ProfilePage() {
    const [windowSize, setWindowSize] = useState(false);

    const handleResize = () => {
        setWindowSize(window.innerWidth < 950);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Verificar o tamanho inicial ao montar o componente

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <> 
            <Header home={false}/>
            {windowSize ? (
                <div className={classes.content}>
                    <div className={classes.profile}>
                        <ProfilePhoto />
                        <EditProfile />
                    </div>

                    <FriendsSection />
                    
                    <div className={classes.social}>
                        <ProfileDetails />
                        <CommunitySection />
                    </div>
                </div>
            ) : (
                <div className={classes.content}>
                    <div className={classes.profile}>
                        <ProfilePhoto />
                        <EditProfile />
                    </div>

                    <ProfileDetails />

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