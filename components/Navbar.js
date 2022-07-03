import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import styles from "../styles/Navbar.module.css"

export default function Navbar() {

  return (
    <>
    <Head>
      <link href="http://fonts.cdnfonts.com/css/neo-sans-std-tr" rel="stylesheet" />          
    </Head>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src='/images/wine.svg' width='75' height='75' alt="Logo Wine" />
      </div>
      <ul className={styles.links}>
        <li>
          <Link href='/NotFound'><a>Clube</a></Link>
        </li>
        <li>
          <Link href='/'><a className={styles.selected}>Loja</a></Link>
        </li>
        <li>
          <Link href='/NotFound'><a>Produtores</a></Link>
        </li>
        <li>
          <Link href='/NotFound'><a>Ofertas</a></Link>
        </li>
        <li>
          <Link href='/NotFound'><a>Eventos</a></Link>
        </li>
      </ul>
      <div className={styles.imgs}>
        <div className={styles.linkImage}>
          <Link href='/NotFound'>
            <Image
              src='/images/menu-01.jpeg'
              width='50' 
              height='50' 
              alt="Lupa - Procurar" />
          </Link>
        </div>
        <div className={styles.linkImage}>
          <Link href='/NotFound'>
            <Image
              src='/images/menu-02.jpeg'
              width='50'
              height='50'
              alt="Usuário" />
          </Link>
        </div>
        <div className={styles.linkImage}>
          <Link href='/NotFound'>
            <Image
              src='/images/menu-03.jpeg'
              width='50'
              height='50'
              alt="Compra" />
          </Link>
        </div>
      </div>
    </nav>
    </>
  )

}