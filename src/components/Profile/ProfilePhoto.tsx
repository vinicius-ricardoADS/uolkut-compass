import'./ProfilePhoto.module.css'
import classes from './ProfilePhoto.module.css'
import gabriel from '../../assets/gabriel.png'
import { User } from '../../types/User'

type PropsProfilePhoto = {
    user: User;
}

function ProfilePhoto({ user }: PropsProfilePhoto) {
    return (
        <>
            <div className={classes.__divProfile}>
                <div className={classes.__divProfilePhoto}>
                    <div className={classes.__divProfilePhotoImg}>
                        <img src={gabriel} alt="" className={classes.img} />
                    </div>
                </div>
                <h4>{user?.name}</h4>
                <h5>{user?.relationship}, {user?.country}</h5>
            </div>


        </>
    )
}

export default ProfilePhoto;