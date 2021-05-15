import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import logo from '../../images/logo.svg';
import useInput from '../../utils/Hooks/useInput';
import { NavLink } from 'react-router-dom';

function Signup() {
    const name = useInput('', { minLength: 5, maxLength: 30 })
    const email = useInput('', { minLength: 3, isEmail: true })
    const password = useInput('', { minLength: 5, maxLength: 15 })

    return (
        <section className="page__section_auth">
            <NavLink className="form__logo" to="/">
                <img src={logo} alt="Логотип" />
            </NavLink>
            <Form
                sort="register"
                formTitle="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                linkWay="./signin"
                text="Уже зарегистрированы?"
                linkText="Войти"
            >

                <Input
                    placeholder="Илья"
                    label="Имя"
                    onChange={e => name.onChange(e)}
                    onBlur={e => name.onBlur(e)}
                    value={name.value}
                    type="text"
                    name="name"
                    validError={name.isDirty && (name.minLengthError || name.maxLengthError)}
                />

                <Input
                    placeholder="pochta@yandex.ru"
                    label="Почта"
                    onChange={e => email.onChange(e)}
                    onBlur={e => email.onBlur(e)}
                    value={email.value}
                    name='email'
                    type='text'
                    validError={email.isDirty && (email.minLengthError || email.emailError)}
                />

                <Input
                    label="Пароль"
                    onChange={e => password.onChange(e)}
                    onBlur={e => password.onBlur(e)}
                    value={password.value}
                    name='password'
                    type='password'
                    placeholder=''
                    validError={password.isDirty && (password.minLengthError || password.maxLengthError)}

                />
            </Form>
        </section >
    )
}

export default Signup;