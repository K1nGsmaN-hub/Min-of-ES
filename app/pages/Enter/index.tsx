import * as React from "react";

import { Container } from "app/sc/Container";
import { EnterWrapper } from "./style";

class EnterPage extends React.PureComponent<any, IState> {
  state: IState = {
    formFields: {
      login: "",
      password: "",
      confirmPassword: "",
      email: "",
      name: "",
      birthDate: "",
      phone: "",
      city: "",
      enterIn: false,
      nickname: "",
      canDrive: false,
      car: false,
      agreement: false,
    },
  };

  changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    this.setState((prev) => {
      return {
        ...prev,
        formFields: {
          ...prev.formFields,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  changeCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prev) => ({
      ...prev,
      formFields: {
        ...prev.formFields,
        [e.target.name]: e.target.checked,
      },
    }));
  };

  render() {
    const {
      login,
      password,
      confirmPassword,
      email,
      name,
      phone,
      city,
      birthDate,
      nickname,
    } = this.state.formFields;

    return (
      <Container>
        <EnterWrapper>
          <form>
            <div className="field">
              <p>Логин</p>
              <input
                type="text"
                name="login"
                value={login}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Пароль</p>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Повторите пароль</p>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>E-mail</p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Ф.И.О.</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Телефон</p>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Дата рождения</p>
              <input
                type="date"
                name="birthDate"
                value={birthDate}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Город</p>
              <input
                type="text"
                name="city"
                value={city}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Вступить в отряд</p>
              <input
                type="checkbox"
                name="enterIn"
                onChange={this.changeCheckboxHandler}
              />
            </div>

            <div className="field">
              <p>Позывной</p>
              <input
                type="text"
                name="nickname"
                value={nickname}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Выездной</p>
              <input
                type="checkbox"
                name="canDrive"
                onChange={this.changeCheckboxHandler}
              />
            </div>

            <div className="field">
              <p>Авто</p>
              <input
                type="checkbox"
                name="car"
                onChange={this.changeCheckboxHandler}
              />
            </div>

            <div className="field">
              <p>Согласие на обработку персональных данных</p>
              <input
                type="checkbox"
                name="agreement"
                onChange={this.changeCheckboxHandler}
              />
            </div>

            <button type="submit">Отправить</button>
          </form>
        </EnterWrapper>
      </Container>
    );
  }
}

interface IState {
  formFields: {
    login: string;
    password: string;
    confirmPassword: string;
    email: string;
    name: string;
    birthDate: string;
    phone: string;
    city: string;
    enterIn: boolean;
    nickname: string;
    canDrive: boolean;
    car: boolean;
    agreement: boolean;
  };
}

export { EnterPage };
