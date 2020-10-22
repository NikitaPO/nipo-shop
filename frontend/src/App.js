import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomesScreen } from "./screens/HomesScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomesScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
