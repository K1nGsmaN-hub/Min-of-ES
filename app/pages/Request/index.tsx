import * as React from "react";

import { Container } from "app/sc/Container";
import { RequestWrapper } from "./style";

class RequestPage extends React.PureComponent<any, IState> {
  state: IState = {
    formFields: {
      name: "",
      phone: "",
      city: "",
      category: "",
      plot: "",
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

  render() {
    const { name, phone, city, category, plot } = this.state.formFields;

    return (
      <Container>
        <RequestWrapper>
          <form>
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
              <p>Телефон:</p>
              <input
                type="text"
                name="phone"
                value={phone}
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
              <p>Категория происшествия</p>
              <select
                name="category"
                value={category}
                onChange={this.changeHandler}
              >
                <option value="" />
                <option value="1">ЧС, Пожары, Поиски, Гум</option>
                <option value="2">Помощь, Зоо, Экология</option>
              </select>
            </div>

            <div className="field">
              <p>Фабула происшествия</p>
              <textarea
                name="plot"
                value={plot}
                onChange={this.changeHandler}
              />
            </div>
            <div className="field">
              <p>Прикрепить файл</p>
              <input type="file" />
            </div>

            <button>Отправить</button>
          </form>
        </RequestWrapper>
      </Container>
    );
  }
}

interface IState {
  formFields: {
    name: string;
    phone: string;
    city: string;
    category: string;
    plot: string;
  };
}

export { RequestPage };
