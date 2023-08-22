import'./ProfilePhoto.module.css'
import classes from './ProfilePhoto.module.css'

function ProfilePhoto() {
    return (
        <>
            <div className={classes.__divProfile}>
                <div className={classes.__divProfilePhoto}>
                    <div className={classes.__divProfilePhotoImg}>

                    </div>
                </div>
                <h4>Iuri Silva</h4>
                <h5>Solteiro, Brasil</h5>
            </div>


        </>
    )
}

export default ProfilePhoto;