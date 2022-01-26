import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "../content/markdown";

const Article = () => {
  return (
    <article>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </article>
  );
};

export default Article;
