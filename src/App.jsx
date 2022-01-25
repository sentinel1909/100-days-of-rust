import { useState } from "react";

import Header from "./components/header";
import Article from "./components/article";
import Footer from "./components/footer";

const App = () => {
  const [today] = useState(new Date());
  const [year] = useState(today.getFullYear());

  return (
    <main>
      <Header />
      <Article />
      <Footer year={year} />
    </main>
  );
};

export default App;
