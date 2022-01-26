import styles from "../styles/footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {props.year} Jeffery D Mitchell All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
