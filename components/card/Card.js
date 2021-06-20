import styles from './Card.module.scss'

export default function Card() {
    return (
        
        <div className={styles["grid__item"]}>
        <div className={styles["card"]}><img className={styles["card__img"]} src="https://i.ibb.co/qNKy9DN/gallery01.jpg" alt="Desert"/>
          <div className={styles["card__content"]}>
            <h1 className={styles["card__header"]}>Misty mornings</h1>
            <p className={styles["card__text"]}>Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
            <button className={styles["card__btn"]}>Explore <span>&rarr;</span></button>
          </div>
        </div>

        <div className={styles["card"]}><img className={styles["card__img"]} src="https://i.ibb.co/rmD60zP/gallery06.jpg" alt="Desert"/>
          <div className={styles["card__content"]}>
            <h1 className={styles["card__header"]}>Misty mornings</h1>
            <p className={styles["card__text"]}>Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
            <button className={styles["card__btn"]}>Explore <span>&rarr;</span></button>
          </div>
        </div>

        <div className={styles["card"]}><img className={styles["card__img"]} src="https://i.ibb.co/bLNXNBh/gallery00.jpg" alt="Desert"/>
          <div className={styles["card__content"]}>
            <h1 className={styles["card__header"]}>Misty mornings</h1>
            <p className={styles["card__text"]}>Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
            <button className={styles["card__btn"]}>Explore <span>&rarr;</span></button>
          </div>
        </div>

        <div className={styles["card"]}><img className={styles["card__img"]} src="https://i.ibb.co/fF4B7vh/gallery07.jpg" alt="Desert"/>
          <div className={styles["card__content"]}>
            <h1 className={styles["card__header"]}>Misty mornings</h1>
            <p className={styles["card__text"]}>Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
            <button className={styles["card__btn"]}>Explore <span>&rarr;</span></button>
          </div>
        </div>

        <div className={styles["card"]}><img className={styles["card__img"]} src="https://i.ibb.co/D9PKncX/gallery05.jpg" alt="Desert"/>
          <div className={styles["card__content"]}>
            <h1 className={styles["card__header"]}>Misty mornings</h1>
            <p className={styles["card__text"]}>Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
            <button className={styles["card__btn"]}>Explore <span>&rarr;</span></button>
          </div>
        </div>

        <div className={styles["card"]}><img className={styles["card__img"]} src="https://i.ibb.co/XznVR6k/gallery03.jpg" alt="Desert"/>
          <div className={styles["card__content"]}>
            <h1 className={styles["card__header"]}>Misty mornings</h1>
            <p className={styles["card__text"]}>Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
            <button className={styles["card__btn"]}>Explore <span>&rarr;</span></button>
          </div>
        </div>

      </div>

      
    )
}
