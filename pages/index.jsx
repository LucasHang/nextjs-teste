import Link from 'next/link';

import Wrapper from '../components/Wrapper';

import styles from '../styles/index.module.css';

export default function Home(props) {

  console.log(Object.keys(props))

  return (

    <Wrapper title="Home">

      <h1>Aqui é a Home</h1>

        <Link href="/teste/menu/awawawwa">
            <a>
                navegação composta &rarr;
            </a>
        </Link>

    </Wrapper>

  );

}
