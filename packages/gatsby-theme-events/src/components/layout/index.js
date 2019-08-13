import React from "react";
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui";

function Layout({ children }) {
  return (
    <ThemeLayout>
      <Header>
        <h1>Gatsby Theme Events Default Layout</h1>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  );
}

export default Layout;
