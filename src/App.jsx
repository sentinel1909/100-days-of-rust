import { useState } from "react";

import Header from "./components/header";
import Content from "./components/basics";
import Footer from "./components/footer";

import styles from "./styles/app.module.css";

const App = () => {
  const [today] = useState(new Date());
  const [year] = useState(today.getFullYear());

  return (
    <main className={styles.container}>
      <Header today={today} />
      <Content />
      <Footer year={year} />
    </main>
  );
};

export default App;
