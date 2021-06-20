import styles from './Navbar.module.scss'

export default function layout() {
    return (
        <div>
            <nav className={styles["menu"]}>
  <ol>
    <li className={styles["menu-item"]}><a href="#0">Home</a></li>
    <li className={styles["menu-item"]}><a href="#0">About</a></li>
    <li className={styles["menu-item"]}>
      <a href="#0">Menu</a>
      <ol className={styles["sub-menu"]}>
        <li className={styles["menu-item"]}><a href="#0">Big Widgets</a></li>
        <li className={styles["menu-item"]}><a href="#0">Bigger Widgets</a></li>
        <li className={styles["menu-item"]}><a href="#0">Huge Widgets</a></li>
      </ol>
    </li>
    <li className={styles["menu-item"]}>
      <a href="#0">Kabobs</a>
      <ol className="sub-menu">
        <li className={styles["menu-item"]}><a href="#0">Shishkabobs</a></li>
        <li className={styles["menu-item"]}><a href="#0">BBQ kabobs</a></li>
        <li className={styles["menu-item"]}><a href="#0">Summer kabobs</a></li>
      </ol>
    </li>
    <li className={styles["menu-item"]}><a href="#0">Contact</a></li>
  </ol>
</nav>
        </div>
    )
}
