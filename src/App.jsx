import { useState } from "react";

import Header from "./components/header";
import Article from "./components/article";
import Footer from "./components/footer";

import styles from "./styles/app.module.css";

const App = () => {
  const [today] = useState(new Date());
  const [year] = useState(today.getFullYear());

  return (
    <main className={styles.container}>
      <Header />
      <Article />
      <Footer year={year} />
    </main>
  );
};

export default App;
