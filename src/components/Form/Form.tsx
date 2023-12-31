import classes from './Form.module.css';
import orkut from '../../assets/ps_orkut (1).png';
import { CheckIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../services/firebase';
import Cookies from 'js-cookie';
import * as api from '../../services/api';

import React, {useState} from 'react';
import { UserType } from '../../types/User';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FormErrorsProps, FormProps, SetFormProps } from '../../utils/form';

type PropsFormLoginOrRegister = {
    isRegister: boolean;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    form: FormProps;
    errors: FormErrorsProps;
    setForm: React.Dispatch<React.SetStateAction<SetFormProps>>
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
    setRecoverPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormLoginOrRegister = (
    { isRegister, 
        onSubmit, 
        onChange, 
        form, 
        errors,
        setForm,
        setIsRegister,
        setRecoverPassword
    }: PropsFormLoginOrRegister) => {
    return (
        <>
            {isRegister ? (
                <div className={classes['container-form']}>
                    <div className={classes['brand-form']}>
                            <img src={orkut} className={classes['img-orkut']} alt='Brand Orkut' />
                            <h3 className={classes.title}>Cadastre-se no UOLkut</h3>
                    </div>
                    <form className={classes.form} onSubmit={onSubmit}>
                            <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
                                    <input onChange={onChange} name='emailRegister'
                                        value={form.emailRegister} className={errors.invalidEmailRegister ? classes['invalid-input'] : classes['input-register']} 
                                        type="text" placeholder="E-mail"/>
                                </div>
                            </div>
                            <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
                                    <input onChange={onChange} name='passwordRegister' 
                                        value={form.passwordRegister} className={errors.invalidPasswordRegister ? classes['invalid-input'] : classes['input-register']}
                                        type="password" placeholder="Senha"/>
                                </div>
                            </div>
                            <div className={classes['input-container-flex']}>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={onChange} name='date_birth' 
                                            value={form.date_birth} className={errors.invalidDateRegister ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="date" placeholder="Nascimento"/>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={onChange} name='profession' 
                                            value={form.profession} className={errors.invalidProfession ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="text" placeholder="Profissão"/>
                                    </div>
                                </div>
                            </div>
                            <div className={classes['input-container-flex']}>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={onChange} name='country' 
                                            value={form.country} className={errors.invalidCountry ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="text" placeholder="País"/>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={onChange} name='city' 
                                            value={form.city} className={errors.invalidCity ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="text" placeholder="Cidade"/>
                                    </div>
                                </div>
                            </div>
                            <div className={classes['input-container-flex']}>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={onChange} name='nameRegister' 
                                            value={form.nameRegister} className={errors.invalidNameRegister ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="text" placeholder="Nome"/>
                                    </div>
                                </div>
                                <select className={errors.invalidRelationship ? classes['invalid-input-select'] : classes['input-select']} value={form.selected} onChange={e => setForm((prevState) => ({
                                        ...prevState,
                                        selected: e.target.value
                                }))} name="relationship">
                                    <option value="Relacionamento">Relacionamento</option>
                                    <option value="Solteiro">Solteiro</option>
                                    <option value="Casado">Casado</option>
                                    <option value="Viúvo">Viúvo</option>
                                </select>
                            </div>
                            <div className={classes['flex-button-register']}>
                                <button className={classes['btn-signup']}>
                                    <span className={classes['signup-description']}>
                                        Criar uma conta
                                    </span>
                                </button>
                            </div>
                            <div className={classes['flex-button-register']}>
                                <button className={classes['btn-signin-register']} onClick={() => setIsRegister(false)}>
                                    <span className={classes['signin-description']}>
                                        Entrar na conta
                                    </span>
                                </button>
                            </div>
                    </form>
                </div>
            ) : (
                <div className={classes['container-form']}>
                    <div className={classes['brand-form']}>
                            <img src={orkut} className={classes['img-orkut']} alt='Brand Orkut' />
                            <h3 className={classes.title}>Acesse o UOLkut</h3>
                    </div>
                    <form className={classes.form} onSubmit={onSubmit}>
                        <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
                                    <input onChange={onChange} name='email'
                                        value={form.email} className={errors.invalidEmail ? classes['invalid-input'] : classes.input} 
                                        type="text" placeholder="E-mail"/>
                                </div>
                                {errors.invalidEmail &&
                                    <p className={classes.errors}>Campo de email não pode estar vazio</p>
                                }
                                {errors.invalidFormatEmail &&
                                    <p className={classes.errors}>Campo de email não é válido</p>
                                }
                            </div>
                            <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
                                    <input onChange={onChange} name='password' 
                                        value={form.password} className={errors.invalidPassword ? classes['invalid-input'] : classes.input}
                                        type="password" placeholder="Senha"/>
                                </div>
                                {errors.invalidPassword &&
                                    <p className={classes.errors}>Campo de senha não pode estar vazio</p>
                                }
                            </div>
                            <div className={classes['password-flex']}>
                                <label htmlFor="ckbox" className={classes.checkbox}>
                                    Lembrar minha senha
                                    <input onChange={onChange} type="checkbox" name="ckPassword" 
                                        id="ckbox" value={form.ckPassword} />
                                    <span className={classes.checkmarkPassword}></span>
                                </label>
                            </div>
                            <div className={classes['flex-button']}>
                                <button className={classes['btn-signin']}>
                                    <span className={classes['signin-description']}>
                                        Entrar na conta
                                    </span>
                                </button>
                                <button className={classes['btn-signup']} onClick={() => setIsRegister(true)}>
                                    <span className={classes['signup-description']}>
                                        Criar uma conta
                                    </span>
                                </button>
                                <a onClick={(event) => {
                                    event.preventDefault(); setRecoverPassword(true)
                                }} className={classes['anchor-password']} href='/'>Esqueci minha senha</a>
                            </div>
                    </form>
                </div>
            )}
        </>
    )
}

const Form = () => {

    const navigate = useNavigate();

    const [modal, setModal] = useState('none');

    const [recoverPassword, setRecoverPassword] = useState(false);

    const [form, setForm] = useState<FormProps>({
        email: '',
        emailRegister: '',
        nameRegister: '',
        passwordRegister: '',
        password: '',
        ckPassword: '',
        date_birth: '',
        profession: '',
        country: '',
        city: '',
        selected: 'Relacionamento'
    });

    const [isRegister, setIsRegister] = useState(false);

    const [errors, setErrors] = useState<FormErrorsProps>({
        invalidEmail: false,
        invalidEmailRegister: false,
        invalidFormatEmail: false,
        invalidPassword: false,
        invalidPasswordRegister: false,
        invalidDateRegister: false,
        invalidProfession: false,
        invalidCountry: false,
        invalidCity: false,
        invalidNameRegister: false,
        invalidRelationship: false,
    })

    
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

            if (name === 'email') {
                setErrors((prevFormErros) => ({
                    ...prevFormErros,
                    invalidFormatEmail: false,
                    invalidEmail: false,
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

        if (form.selected !== 'Relacionamento') {
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

    const validateFormatEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(form.email)) {
            return true;
        } else {
            return false;
        }
    }

    const validateFormatEmailRegister = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(form.emailRegister)) {
            return true;
        } else {
            return false;
        }
    }

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isRegister) {
            if (form.emailRegister.trim() === '' && form.passwordRegister.trim() === '' && form.date_birth.trim() === ''
            && form.profession.trim() === '' && form.country.trim() === '' && form.city.trim() === '' &&
                form.selected === 'Relacionamento' && form.nameRegister.trim() === '') {
                setErrors({
                    invalidEmail: false,
                    invalidEmailRegister: true,
                    invalidPassword: false,
                    invalidFormatEmail: false,
                    invalidPasswordRegister: true,
                    invalidDateRegister: true,
                    invalidProfession: true,
                    invalidCountry: true,
                    invalidCity: true,
                    invalidRelationship: true,
                    invalidNameRegister: true,
                });
                return;
            }

            if (validateFormatEmailRegister()) {
                setErrors({
                    invalidEmail: false,
                    invalidEmailRegister: true,
                    invalidPassword: false,
                    invalidFormatEmail: false,
                    invalidPasswordRegister: false,
                    invalidDateRegister: false,
                    invalidProfession: false,
                    invalidCountry: false,
                    invalidCity: false,
                    invalidRelationship: false,
                    invalidNameRegister: false,
                });
                return;
            }

            const users: UserType[] = await api.get();


            const user: UserType = {
                id: users.length,
                name: form.nameRegister,
                email: form.emailRegister,
                password: form.passwordRegister,
                date_birth: new Date(form.date_birth),
                profession: form.profession,
                country: form.country,
                city: form.city,
                relationship: form.selected,
                image_url: ""
            };

            const response = await api.post(user);

            if (response) {
                setModal('flex');

                const userCredentials = await createUserWithEmailAndPassword(getAuth(), user.email, user.password);
                
                if (userCredentials.user) {
                    const token = await userCredentials.user.getIdToken();
    
                    Cookies.set('token', token);

                    navigate('/profiles');
                }
            }
        }
        
        if (form.email.trim() === '' && form.password.trim() === '') {
            setErrors({
                invalidEmail: true,
                invalidEmailRegister: false,
                invalidPassword: true,
                invalidFormatEmail: false,
                invalidPasswordRegister: false,
                invalidDateRegister: false,
                invalidProfession: false,
                invalidCountry: false,
                invalidCity: false,
                invalidRelationship: false,
                invalidNameRegister: false,
            });
            return;
        }

        if (validateFormatEmail()) {
            setErrors({
                invalidEmail: false,
                invalidEmailRegister: false,
                invalidPassword: false,
                invalidFormatEmail: true,
                invalidPasswordRegister: false,
                invalidDateRegister: false,
                invalidProfession: false,
                invalidCountry: false,
                invalidCity: false,
                invalidRelationship: false,
                invalidNameRegister: false,
            });
            return;
        }

        const users: UserType[] = await api.get();

        const user = users.find((user) => {
            return user.email === form.email && user.password === form.password;
        });

        if (user) {

            const userCredentials = await signInWithEmailAndPassword(getAuth(), user.email, user.password);

            if (userCredentials.user) {
                const token = await userCredentials.user.getIdToken();

                Cookies.set('token', token);

                navigate('/profiles');
            }
            
        }
    }

    return (
        <>
            <div id="myModal" className={classes.modal} style={{ display: modal }}>
                <div className={classes['modal-content']}>
                    <span onClick={() => setModal('none')} className={classes.close} id="closeModalBtn">&times;</span>
                    <div className={classes['flex-modal']}>
                        <div className={classes.check}>
                            <CheckIcon color='white' />
                        </div>
                        <p className={classes['check-message']} style={{ color: '#ED6D25'}}>Cadastrado com sucesso</p>
                    </div>
                </div>
            </div>
            {recoverPassword ? (
                <div className={classes['container-form']}>
                    <div className={classes['brand-form']}>
                            <img src={orkut} className={classes['img-orkut']} alt='Brand Orkut' />
                            <h3 className={classes.title}>Recupere sua senha</h3>
                    </div>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
                                    <input onChange={handleChange} name='email'
                                        value={form.email} className={errors.invalidEmail ? classes['invalid-input'] : classes.input} 
                                        type="text" placeholder="E-mail cadastrado"/>
                                </div>
                                {errors.invalidEmail &&
                                    <p className={classes.errors}>Campo de email não pode estar vazio</p>
                                }
                                {errors.invalidFormatEmail &&
                                    <p className={classes.errors}>Campo de email não é válido</p>
                                }
                            </div>
                            <div className={classes['flex-button']}>
                                <button className={classes['btn-signin']}>
                                    <span className={classes['signin-description']}>
                                        Enviar código
                                    </span> 
                                </button>
                                <a className={classes['anchor-password']} href='#'>Lembrou sua senha ?</a>
                                <button className={classes['btn-signup']} onClick={() => setRecoverPassword(false)}>
                                    <span className={classes['signup-description']}>
                                        Entrar com suas credênciais
                                    </span>
                                </button>
                            </div>
                    </form>
                </div>
            ): (
                <FormLoginOrRegister 
                    isRegister={isRegister}
                    errors={errors}
                    form={form}
                    onChange={handleChange}
                    onSubmit={submitHandler}
                    setForm={setForm}
                    setIsRegister={setIsRegister}
                    setRecoverPassword={setRecoverPassword}
                     
                />
            )}
            
        </>
    )
};

export default Form;