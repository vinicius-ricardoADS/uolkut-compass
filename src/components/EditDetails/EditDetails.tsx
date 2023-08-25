import { UserType } from '../../types/User';
import { useState } from 'react';
import classes from './EditDetails.module.css';
import * as api from '../../services/api';
import { useNavigate } from 'react-router-dom';

type PropsEditDetails = {
    user: UserType;
}

const EditDetails = ({ user }: PropsEditDetails) => {
    const navigate = useNavigate();

    const [ form, setForm ] = useState({
        profession: '',
        name: '',
        city: '',
        country: '',
        birth_date: '',
        password: '',
        repeat_password: '',
        relationship: 'Relacionamento',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setForm((prevFormData) => ({
            ...prevFormData,
            [name]: fieldValue,
        }));
    }

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.password.trim() !== '' && form.repeat_password.trim() !== '') {
            if (form.password !== form.repeat_password) {
                return {
                    message: 'Error => password unequal'
                }
            }
        }

        const userEdit: UserType = {
            id: user!.id,
            name: form.name === '' ? user!.name : form.name,
            email: user!.email,
            password: form.password === '' ? user!.password : form.password,
            date_birth: form.birth_date === '' ? user!.date_birth : new Date(form.birth_date),
            profession: form.profession === '' ? user!.profession : form.profession,
            country: form.country === '' ? user!.country : form.country,
            city: form.city === '' ? user!.city : form.city,
            relationship: form.relationship === '' ? user!.relationship : form.relationship,
            image_url: ""
        };

        const response = await api.put(userEdit.id, userEdit);

        if (response) {
            navigate('/profiles');
        } 
    }

    return (
        <>
            <div className={classes.container}>
                <h1 className={classes.title}>Editar informações</h1>
                <form onSubmit={submitHandler} className={classes.form}>
                    <div className={classes['input-container-flex']}>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='profession' 
                                    defaultValue={form.profession} className={classes['input-flex']}
                                    type="text" placeholder="Profissão"/>
                            </div>
                        </div>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='name' 
                                    defaultValue={form.name} className={classes['input-flex']}
                                    type="text" placeholder="Nome"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes['input-container-flex']}>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='city' 
                                    defaultValue={form.city} className={classes['input-flex']}
                                    type="text" placeholder="Cidade"/>
                            </div>
                        </div>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='country' 
                                    defaultValue={form.country} className={classes['input-flex']}
                                    type="text" placeholder="País"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes['input-container-flex']}>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='birth_date' 
                                    defaultValue={form.birth_date} className={classes['input-flex']}
                                    type="date" placeholder="Cidade"/>
                            </div>
                        </div>
                        <div>
                            <select className={classes['input-select']} defaultValue={user?.relationship} onChange={e => setForm((prevState) => ({
                                        ...prevState,
                                        relationship: e.target.value
                                }))} name="relationship">
                                    <option value="Relacionamento">Relacionamento</option>
                                    <option value="Solteiro">Solteiro</option>
                                    <option value="Casado">Casado</option>
                                    <option value="Viúvo">Viúvo</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes['input-container-flex']}>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='password' 
                                    defaultValue={form.password} className={classes['input-flex']}
                                    type="password" placeholder="Senha"/>
                            </div>
                        </div>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='repeat_password' 
                                    defaultValue={form.repeat_password} className={classes['input-flex']}
                                    type="password" placeholder="Repetie Senha"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes['btn-container']}>
                        <button className={classes['btn-signin']}>
                            <span className={classes['signin-description']}>
                                Salvar
                            </span>
                        </button>
                    </div>
                    
                </form>
            </div>
        </>
    )
};

export default EditDetails;