import styles from './Navbar.module.scss'
import Link from 'next/link'

export default function layout() {
    return (
        <div>
            <nav className={styles["menu"]}>
  <ol>
    <li className={styles["menu-item"]}><Link href='/'><h1>Home</h1></Link></li>
    <li className={styles["menu-item"]}><Link href='/'><h1>About</h1></Link></li>
    <li className={styles["menu-item"]}>
    <Link href='/'><h1>Menu</h1></Link>
      <ol className={styles["sub-menu"]}>
        <li className={styles["menu-item"]}><a>Big Widgets</a></li>
        <li className={styles["menu-item"]}><a >Bigger Widgets</a></li>
        <li className={styles["menu-item"]}><a >Huge Widgets</a></li>
      </ol>
    </li>
    <li className={styles["menu-item"]}>
    <Link href='/'><h1>Kabobs</h1></Link>
      <ol className="sub-menu">
        <li className={styles["menu-item"]}><a>Shishkabobs</a></li>
        <li className={styles["menu-item"]}><a >BBQ kabobs</a></li>
        <li className={styles["menu-item"]}><a >Summer kabobs</a></li>
      </ol>
    </li>
    <li className={styles["menu-item"]}><a >Contact</a></li>
  </ol>
</nav>
        </div>
    )
}
