import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://botostart.ir">Botostart</a>| react.js Full course
      </p>
    </div>
  );
}

export default Header;
