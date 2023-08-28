export interface FormProps {
    email: string;
    emailRegister: string;
    nameRegister: string;
    passwordRegister: string;
    password: string;
    ckPassword: string;
    date_birth: string;
    profession: string;
    country: string;
    city: string;
    selected: string;
}

export interface FormErrorsProps {
    invalidEmail: boolean;
    invalidEmailRegister: boolean;
    invalidFormatEmail: boolean;
    invalidPassword: boolean;
    invalidPasswordRegister: boolean;
    invalidDateRegister: boolean;
    invalidProfession: boolean;
    invalidCountry: boolean;
    invalidCity: boolean;
    invalidNameRegister: boolean;
    invalidRelationship: boolean;
}

export interface SetFormProps {
    email: string;
    emailRegister: string;
    nameRegister: string;
    passwordRegister: string;
    password: string;
    ckPassword: string;
    date_birth: string;
    profession: string;
    country: string;
    city: string;
    selected: string;
}