 
import React, { useEffect, useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

import styles from './Cart.module.scss';
import axios from 'axios';

const Page = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [cartArr, setCartArr] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [token, setToken] = useState('')

    
    const getAllCart = () => {
        axios
        .get('http://51.20.95.11:8000/api/v1/cart/view_cart/', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            if (response.status !== 200) {
            throw new Error('Network response was not ok');
            }
            const data = response.data;
            setCartArr(data)
            console.log(data, 'cart again');
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    const deleteCartItem = async (id) => {
        try {
          const response = await axios.delete(`http://51.20.95.11:8000/api/v1/cart/remove_from_cart/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          if (response.status === 204) {
            console.log(`Deleted ${id}`);
            getAllCart();
          }
        } catch (error) {
          console.error('Error fetching cart delete:', error);
        }
      };
    const handleDelete = (id) => {
        setDeleteId(id)
        deleteCartItem(id)
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setInputSearch('');
    };
    let summary = 0
    cartArr?.forEach(elem =>{
        summary += +elem.product.price * elem.quantity
    })
    useEffect(() => {
        if (deleteId !== null) {
            getAllCart();
        }
    }, [deleteId]);

    useEffect(() => {
        const localAcces = localStorage.getItem('access_token')
        setToken(localAcces)
        getAllCart();
    }, []);
    
    return (
        <main className={styles.cart}>
            <div className={styles.cartHeading}>
                <h1>Корзина</h1>
                <span>№ 1695-1984-38867</span>
            </div>
            {/* <form onSubmit={handleSearchSubmit} className={styles.cartSearch}>
                <input
                    type="text"
                    placeholder="Быстрое добавление: введите наименование или код товара"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                <button>
                    <FiSearch color="#666" />
                </button>
            </form> */}
            <div className={styles.cartItems}>
                <div className={styles.cart_wrapper}>
                    <div className={styles.cart_wrapper__tabs}>
                        <p>Наименование</p>
                        <p>Цена</p>
                        <p>Кол-во</p>
                        <p>Стоимость</p>
                    </div>
                    <hr />
                    <div className={styles.products}>
                        {
                            cartArr?.length > 0 ? (
                                cartArr?.map(elem => (
                                <div className={styles.product_wrapper} key={elem.id}>
                                    <div className={styles.product_wrapper__name}>
                                        <img
                                            src={elem.product.image1}
                                            alt={elem.product.name}
                                        />
                                        <div className={styles.product_wrapper__name_info}>
                                            <div>Лучшая цена</div>
                                            <span>код: 17476254</span>
                                            <p>{elem.product.name} AEG BS18G4-202C 4935478630</p>
                                            <span>
                                                Можно забрать <b>сегодня</b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.product_wrapper__price}>{elem.product.price} р</div>
                                    <div>{elem.quantity}</div>
                                    <div>{elem.product.price} р.</div>
                                    <div className={styles.userTools}>
                                        <AiOutlineHeart /> 
                                        <MdDeleteOutline onClick={() => handleDelete(elem.product.id)} />
                                    </div>
                                </div>
                                ))
                            ) : (
                                <p>в корзине ничего нет</p>
                            )
                        }
                        
                    </div>
                </div>
                <div className={styles.cartBill}>
                    <h2>Ваш заказ</h2>
                    <p>
                        Выбрано товаров: <span>{cartArr?.length}</span>
                    </p>
                    <p>
                        Вес заказа: <span>1кг</span>
                    </p>
                    <p>
                        Общая стоимость: <span className={styles.bill}>{summary}</span>
                    </p>
                    <div className={styles.cartBill_promocode}>
                        <input type="text" name="" id="" placeholder="Введите промокод" />
                        <span title="введите промокод"> ? </span>
                    </div>
                    <hr />
                    <div className={styles.cartBill_btns}>
                        <button>Оформить заказ</button>
                        <button>Оформить без регистрации</button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Page;