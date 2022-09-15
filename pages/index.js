import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Search from '../components/search/Search'
import Team from '../components/team/Team'
import styles from '../styles/Home.module.css'
import Login from '../components/login/login'

export default function Home() {
    return (
        <div className={styles.container}>
            <Search />
            <Team />
            <Login />
        </div>
    )
}
