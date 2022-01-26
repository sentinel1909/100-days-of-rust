import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "../content/markdown";

import styles from "../styles/markdown-styles.module.css";

const Article = () => {
  return (
    <article className={styles.ul}>
      <ReactMarkdown
        className={styles.reactMarkDown}
        children={markdown}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </article>
  );
};

export default Article;
