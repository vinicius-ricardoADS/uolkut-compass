import classes from './Form.module.css';
import orkut from '../../assets/ps_orkut (1).png';
import { useNavigate } from 'react-router-dom';

import React, {useState} from 'react';

const Form = () => {

    const navigate = useNavigate();

      const [form, setForm] = useState({
        email: '',
        emailRegister: '',
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

    const [errors, setErrors] = useState({
        invalidEmail: false,
        invalidEmailRegister: false,
        invalidFormatEmail: false,
        invalidPassword: false,
        invalidPasswordRegister: false,
        invalidDateRegister: false,
        invalidProfession: false,
        invalidCountry: false,
        invalidCity: false,
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

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
        if (isRegister) {
            if (form.emailRegister.trim() === '' && form.passwordRegister.trim() === '' && form.date_birth.trim() === ''
            && form.profession.trim() === '' && form.country.trim() === '' && form.city.trim() === '' &&
                form.selected === 'Relacionamento') {
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
                });
                return;
            }

            if (validateFormatEmailRegister()) {
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
                });
                return;
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
            });
            return;
        }

        navigate('/profile');
    }

    return (
        <>
            {isRegister ? (
                <div className={classes['container-form']}>
                    <div className={classes['brand-form']}>
                            <img src={orkut} className={classes['img-orkut']} alt='Brand Orkut' />
                            <h3 className={classes.title}>Cadastre-se no UOLkut</h3>
                    </div>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
                                    <input onChange={handleChange} name='emailRegister'
                                        value={form.emailRegister} className={errors.invalidEmailRegister ? classes['invalid-input'] : classes['input-register']} 
                                        type="text" placeholder="E-mail"/>
                                </div>
                            </div>
                            <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
                                    <input onChange={handleChange} name='passwordRegister' 
                                        value={form.passwordRegister} className={errors.invalidPasswordRegister ? classes['invalid-input'] : classes['input-register']}
                                        type="password" placeholder="Senha"/>
                                </div>
                            </div>
                            <div className={classes['input-container-flex']}>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={handleChange} name='date_birth' 
                                            value={form.date_birth} className={errors.invalidDateRegister ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="date" placeholder="Nascimento"/>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={handleChange} name='profession' 
                                            value={form.profession} className={errors.invalidProfession ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="text" placeholder="Profissão"/>
                                    </div>
                                </div>
                            </div>
                            <div className={classes['input-container-flex']}>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={handleChange} name='country' 
                                            value={form.country} className={errors.invalidCountry ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="text" placeholder="País"/>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes['label-float']}>
                                        <input onChange={handleChange} name='city' 
                                            value={form.city} className={errors.invalidCity ? classes['invalid-input-flex'] : classes['input-flex']}
                                            type="text" placeholder="Cidade"/>
                                    </div>
                                </div>
                            </div>
                            <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
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
                            </div>
                            <div className={classes['flex-button-register']}>
                                <button className={classes['btn-signup']}>
                                    <span className={classes['signup-description']}>
                                        Criar uma conta
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
                    <form className={classes.form} onSubmit={submitHandler}>
                        <div className={classes['input-container']}>
                                <div className={classes['label-float']}>
                                    <input onChange={handleChange} name='email'
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
                                    <input onChange={handleChange} name='password' 
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
                                    <input onChange={handleChange} type="checkbox" name="ckPassword" 
                                        id="ckbox" value={form.ckPassword} />
                                    <span className={classes.checkmarkPassword}></span>
                                </label>
                            </div>
                            <div className={classes['flex-button']}>
                                <button className={classes['btn-signin']} onClick={() => setIsRegister(false)}>
                                    <span className={classes['signin-description']}>
                                        Entrar na conta
                                    </span>
                                </button>
                                <button className={classes['btn-signup']} onClick={() => setIsRegister(true)}>
                                    <span className={classes['signup-description']}>
                                        Criar uma conta
                                    </span>
                                </button>
                                <a className={classes['anchor-password']} href='/'>Esqueci minha senha</a>
                            </div>
                    </form>
                </div>
            )}
        </>
    )
};

export default Form;