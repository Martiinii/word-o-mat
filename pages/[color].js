import Head from 'next/head'
import { useRouter } from 'next/router';

const Color = () => {

    const router = useRouter();
    const {color} = router.query;

    return (
        <>
            <Head>
                <title>#{color}</title>
            </Head>

            <div className='w-screen h-screen flex justify-center items-center'
                style={{backgroundColor: `#${color}`}}
            >
                <span className='p-10 text-5xl bg-slate-900 rounded-3xl text-white font-semibold'>
                    #{color}
                </span>
            </div>
        </>
    )
}

export default Color;
