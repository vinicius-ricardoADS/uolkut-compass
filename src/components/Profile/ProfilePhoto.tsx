import'./ProfilePhoto.module.css'
import classes from './ProfilePhoto.module.css'
import gabriel from '../../assets/gabriel.png'
import ModeEdit from '../../assets/Mode edit.png';
import { UserType } from '../../types/User';
import { useState } from 'react';
import * as api from '../../services/api';
import { LucideUser } from 'lucide-react';

type PropsProfilePhoto = {
    user: UserType;
    edit: boolean;
}

function ProfilePhoto({ user, edit }: PropsProfilePhoto) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [existImage, setExistImage] = useState(false);

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setExistImage(true);
            updateImageUrlInUser(URL.createObjectURL(file));
        }
      };

      const updateImageUrlInUser = async (imageUrl: string) => {
        
        user.image_url = imageUrl;

        try {
          const response = await api.put(user?.id, user);
    
          if (response) {
            console.log('URL da imagem atualizada no usuário com sucesso.');
          } else {
            console.error('Erro ao atualizar a URL da imagem no usuário.');
          }
        } catch (error) {
          console.error('Erro:', error);
        }
      };
    return (
        <>
            {edit ? (
                <div className={classes.__divProfile}>
                    <div className={classes.__divProfilePhotoEdit}>
                        <div className={classes.__divProfilePhotoImg}>
                            <div className={classes['image-container']}>
                                {existImage ? (<img src={existImage ? selectedImage! : ''} alt="" className={classes.img} />) : (<LucideUser className={classes.img}/>)}
                                <label htmlFor="image-input" className={classes['edit-icon']}>
                                    <img src={ModeEdit} alt="Editar" />
                                </label>
                                <input onChange={handleImageChange} type="file" id="image-input" accept="image/*" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes.__divProfile}>
                    <div className={classes.__divProfilePhoto}>
                        <div className={classes.__divProfilePhotoImg}>
                            <img src={gabriel} alt="" className={classes.img} />
                        </div>
                    </div>
                    <h4>{user?.name}</h4>
                    <h5>{user?.relationship}, {user?.country}</h5>
                </div>
            )}
        </>
    )
}

export default ProfilePhoto;