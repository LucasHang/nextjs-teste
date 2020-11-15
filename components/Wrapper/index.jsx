import {useState, useEffect} from 'react';

import Head from 'next/head';

import Header from '../Header';
import Main from '../Main';
import Menu from '../Menu';
import Footer from '../Footer';

export default function Wrapper(props) {

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setShowMenu(window.location.pathname !== '/login');
    }, []);

    return (

        <>

            <Head>
                <title>{props.title || 'NextJs - Teste'}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="my-container">
                <Header />
                <Main>
                    { showMenu && <Menu /> }
                    {props.children}
                </Main>
                <Footer />
            </div>

        </>

    );

}