import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Search from '../components/search/Search'
import Team from '../components/team/Team'
import styles from '../styles/Home.module.css'
import Login from '../components/login/login'
import Contact from '../components/contact/contact'
import SliderReact from '../components/slider/slider'
import Footer from '../components/footer/footer'
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rootz</title>
                <meta property="og:title" content="Rootz" />
                <meta
                    property="og:description"
                    content="Rootz a Halo lab Task."
                />
                <meta name="description" content="Rootz a Halo lab Task." />

                <meta
                    property="og:image"
                    content="https://halo-test.vercel.app/parrot.png"
                />
            </Head>
            <Search />
            <Team />
            <Login />
            <Contact />
            <SliderReact />
            <Footer />
        </div>
    )
}
