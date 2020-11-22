import Link from 'next/link';

import Wrapper from '../components/Wrapper';

import styles from '../styles/login.module.css';

export default function Login() {

    return (

        <Wrapper title="Login">

            <div className={styles.grid}>
                <Link href="/">
                    <a className={`${styles.card} ${styles.special}`}>
                        <h3>Exemplo de Menu &rarr;</h3>
                        <p>Apenas testando o nextjs e aproveitando pra fazer um menu.</p>
                    </a>
                </Link>
            </div>

        </Wrapper>

    );

}