import * as React from "react";

import Link from "next/link";

import { Container } from "app/sc/Container";
import { HeaderWrapper } from "./style";

import { navLinks } from "./mock";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <div className="upper">
          <div className="logo">
            <p>L</p>
          </div>

          <div className="title">
            <h1>
              автономная некоммерческая организация добровольческий спасательный
              отряд 111.62
            </h1>
            <p>
              <a href="tel:+79249911162">ТЕЛ: 8-924-99-111-62</a>
            </p>
          </div>
        </div>

        <nav>
          {navLinks.map(({ id, title, path }) => (
            <Link href={path} key={id}>
              <a>{title}</a>
            </Link>
          ))}
        </nav>
      </HeaderWrapper>
    </Container>
  );
};

export { Header };
