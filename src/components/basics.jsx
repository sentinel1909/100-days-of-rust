import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import basics from "../content/basics";

import styles from "../styles/markdown-styles.module.css";

const Basics = () => {
  return (
    <article className={styles.ul}>
      <ReactMarkdown
        className={styles.reactMarkDown}
        children={basics}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </article>
  );
};

export default Basics;
