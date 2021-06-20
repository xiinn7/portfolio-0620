import Navbar from '../header/Navbar'
import styles from './Layout.module.scss'

export default function layout(props) {
    return (
        <div className={styles.layout}>
            <Navbar />

            <main className={styles.main}>{props.children}</main>
        </div>
    )
}
