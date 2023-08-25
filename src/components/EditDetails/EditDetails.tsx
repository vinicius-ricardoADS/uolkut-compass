import { User } from '../../types/User';
import { useState } from 'react';
import classes from './EditDetails.module.css';

type PropsEditDetails = {
    user: User;
}

const EditDetails = ({ user }: PropsEditDetails) => {
    const [ form, setForm ] = useState({
        profession: user?.profession,
        name: user?.name,
        ciy: user?.city,
        country: user?.country,
        birth_date: user?.date_birth,
        password: '',
        repeat_password: '',
        relationship: user?.relationship,
    });

    const [ errors, setErrors ] = useState({
        invalidProfession: false,
        invalidName: false,
        invalidCity: false,
        invalidCountry: false,
        invalidBirthDate: false,
        invalidRelationship: false,
        invalidPassword: false,
        invalidRepeatPassword: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        if (type === 'text') {
            if (name === 'emailRegister') {
                setErrors((prevFormErros) => ({
                    ...prevFormErros,
                    invalidFormatEmail: false,
                    invalidEmailRegister: false,
                }));
            }
            
            if (name === 'profession') {
                setErrors((prevFormErros) => ({
                    ...prevFormErros,
                    invalidProfession: false,
                }));
            }
            
            if (name === 'country') {
                setErrors((prevFormErros) => ({
                    ...prevFormErros,
                    invalidCountry: false,
                }));
            }

            if (name === 'city') {
                setErrors((prevFormErros) => ({
                    ...prevFormErros,
                    invalidCity: false,
                }));
            }

            if (name === 'nameRegister') {
                setErrors((prevFormErros) => ({
                    ...prevFormErros,
                    invalidNameRegister: false,
                }));
            }
        }

        if (type === 'password') {
            setErrors((prevFormErros) => ({
                ...prevFormErros,
                invalidPassword: false,
                invalidPasswordRegister: false
            }))
        }

        if (type === 'date') {
            setErrors((prevFormErros) => ({
                ...prevFormErros,
                invalidDateRegister: false
            }))
        }

        if (form.relationship !== 'Relacionamento') {
            setErrors((prevFormErros) => ({
                ...prevFormErros,
                invalidRelationship: false,
            }))
        }

        setForm((prevFormData) => ({
            ...prevFormData,
            [name]: fieldValue,
        }));
    }

    return (
        <>
            <div className={classes.container}>
                <h1 className={classes.title}>Editar informações</h1>
                <form className={classes.form}>
                    <div className={classes['input-container-flex']}>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='profession' 
                                    defaultValue={form.profession} className={errors.invalidProfession ? classes['invalid-input-flex'] : classes['input-flex']}
                                    type="text" placeholder="Profissão"/>
                            </div>
                        </div>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='name' 
                                    defaultValue={form.name} className={errors.invalidName ? classes['invalid-input-flex'] : classes['input-flex']}
                                    type="text" placeholder="Nome"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes['input-container-flex']}>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='city' 
                                    defaultValue={form.ciy} className={errors.invalidCity ? classes['invalid-input-flex'] : classes['input-flex']}
                                    type="text" placeholder="Cidade"/>
                            </div>
                        </div>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='country' 
                                    defaultValue={form.country} className={errors.invalidCountry ? classes['invalid-input-flex'] : classes['input-flex']}
                                    type="text" placeholder="País"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes['input-container-flex']}>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='birth_date' 
                                    defaultValue={new Date(form.birth_date).toDateString()} className={errors.invalidBirthDate ? classes['invalid-input-flex'] : classes['input-flex']}
                                    type="date" placeholder="Cidade"/>
                            </div>
                        </div>
                        <div>
                            <select className={errors.invalidRelationship ? classes['invalid-input-select'] : classes['input-select']} defaultValue={user?.relationship} onChange={e => setForm((prevState) => ({
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
                                    defaultValue={form.password} className={errors.invalidPassword ? classes['invalid-input-flex'] : classes['input-flex']}
                                    type="password" placeholder="Senha"/>
                            </div>
                        </div>
                        <div>
                            <div className={classes['label-float']}>
                                <input onChange={handleChange} name='repeate_password' 
                                    defaultValue={form.repeat_password} className={errors.invalidRepeatPassword ? classes['invalid-input-flex'] : classes['input-flex']}
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