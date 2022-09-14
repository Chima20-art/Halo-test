import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Search from '../components/search/Search'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Header />
            <Search />
        </div>
    )
}
