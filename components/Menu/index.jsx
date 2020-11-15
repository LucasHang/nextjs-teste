import {useState} from 'react';
import cn from 'classnames';

import styles from './style.module.css';

import { FiCoffee, FiCloudLightning, FiGithub, FiMoon, FiWind, FiSlack, FiChevronsLeft } from "react-icons/fi";

export default function Menu(){

    const [menuShort, setMenuShort] = useState(false);

    function toggleMenu(){
        setMenuShort(!menuShort);
    }

    return (

        <nav className={`${styles.menu} ${ cn({ [styles.short]: menuShort }) }`}>
            <button onClick={toggleMenu} type="button" className={`btn btn-sm btn-no-outline ${styles['my-btn']}`}>
                <FiChevronsLeft size={22} />
            </button>
            <ul>
                <li>
                    <a className={styles['menu-item']}>
                        <FiWind />
                        <span>Menu 1</span>
                    </a>
                </li>
                <li>
                    <a className={styles['menu-item']}>
                        <FiCloudLightning />
                        <span>Menu 2 mais texto</span>
                    </a>
                </li>
                <li>
                    <div className={styles['menu-item']}>
                        <FiCoffee />
                        <span>Menu 3 grupo</span>
                        <ul>
                            <li>
                                <a className={styles['menu-item']}>
                                    <FiGithub />
                                    <span>Menu 3 grupo item 1</span>
                                </a>
                            </li>
                            <li>
                                <a className={styles['menu-item']}>
                                    <FiSlack />
                                    <span>Menu 3 grupo item 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className={styles['menu-item']}>
                        <FiMoon />
                        <span>Menu 4</span>
                    </a>
                </li>
            </ul>
        </nav>

    );

}