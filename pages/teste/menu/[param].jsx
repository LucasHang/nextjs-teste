import { useRouter } from 'next/router';

export default function Menu(){

    const router = useRouter();

    return(

        <h1>Parametro passado: {router.query.param}</h1>

    );

}