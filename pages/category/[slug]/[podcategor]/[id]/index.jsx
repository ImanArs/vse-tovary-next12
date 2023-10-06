 
import React, { useState } from 'react';
import styles from './Id.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNextModalOpen, setIsNextModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsNextModalOpen(false);
    };

    const openNextModal = () => {
        setIsNextModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        openNextModal();
    };
    const notify = () =>
        toast.success('Добавлен в корзинку )', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    return (
        <main className={styles.main}>
            <ToastContainer />
            <h1>Ударный гайковерт Ryobi ONE+ R18IW3-0 5133002436</h1>

            <div className={styles.main__wrapper}>
                <div className={styles.main__wrapper__right}>
                    <div className={styles.main__wrapper__right__text}>
                        <span>Код товара: 15515600</span>
                    </div>
                    <div className={styles.main__wrapper__right__image}>
                        <img
                            src="https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/gajkoverty/734245/560x504/53993032.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.main__wrapper__center}>
                    <span>Гарантия производителя до 5 лет</span>
                    <p>Угловые:нет</p>
                    <p>Угловые:нет</p>
                    <p>Угловые:нет</p>
                    <p>Угловые:нет</p>
                    <p>Угловые:нет</p>
                    <p>Угловые:нет</p>
                    <p>Угловые:нет</p>
                </div>

                <div className={styles.main__wrapper__left}>
                    <div className={styles.main__wrapper__left__one}>
                        <div className={styles.main__wrapper__left__one__img}>
                            <img src="/fire.svg" alt="" />
                        </div>
                        <div className={styles.main__wrapper__left__one__text}>
                            <h3>Лучшая цена</h3>
                            <p>Ниже средней рыночной</p>
                        </div>
                    </div>
                    <div className={styles.main__wrapper__left__two}>
                        <h2>9 605 р.</h2>

                        <button className={styles.main__wrapper__left__two__button1}>
                            В корзину
                        </button>
                        <button
                            className={styles.main__wrapper__left__two__button2}
                            onClick={openModal}>
                            Быстрый заказ
                        </button>
                        <div className={styles.main__wrapper__left__thee}>
                            <div className={styles.main__wrapper__left__thee__img}>
                                <img src="/cbr.svg" alt="" />
                            </div>
                            <div className={styles.main__wrapper__left__thee__text}>
                                <p>
                                    Спишите до 3 842 р. <br /> бонусами
                                </p>
                                <p>Начислим 96 бонусов</p>
                            </div>
                        </div>
                        {/* <hr />
                        <div>
                            <icon></icon>
                            <span></span>
                        </div> */}
                    </div>
                </div>
                {isModalOpen && (
                    <div className={styles.modal}>
                        <div className={styles.modal__wrapper}>
                            <button className={styles.modal__wrapper__button} onClick={closeModal}>
                                X
                            </button>

                            <form className={styles.modal__wrapper__input}>
                                <input type="text" placeholder="Имя :" id="username" required />

                                <input type="text" placeholder="Адрес" id="adress" required />

                                <input
                                    type="number"
                                    placeholder="Номер телефона :"
                                    id="number"
                                    required
                                />
                            </form>
                            <button
                                className={styles.modal__wrapper__button}
                                onClick={handleSubmit}>
                                Продолжить
                            </button>
                        </div>
                    </div>
                )}

                {isNextModalOpen && (
                    <div className={styles.modal}>
                        <div className={styles.modal__wrapper}>
                            <button className={styles.modal__wrapper__button} onClick={closeModal}>
                                X
                            </button>

                            <p>21312423512453451</p>
                            <button
                                className={styles.modal__wrapper__button}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit(e);
                                    notify();
                                }}>
                                Отправить
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Page;
