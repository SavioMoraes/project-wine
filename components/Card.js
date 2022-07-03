import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Card.module.css"

export default function Card({ wine }) {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <Link href={`/wine/${wine.id}`}>
            <Image
              src={wine.image}
              width="150"
              height="220"
              alt={wine.name}
            />
          </Link>
          <Link href={`/wine/${wine.id}`}>
            <h3 className={styles.name}>{wine.name}</h3>
          </Link>
          <div className={styles.priceDiscount}>
            <h4 className={styles.price}>R$ {wine.price}</h4>
            <h4 className={styles.discount}>{wine.discount}% OFF</h4>
          </div>
          <div className={styles.partnerGroup}>
            <h4 className={styles.partnerTitle}>SÓCIO WINE</h4>
            <h4 className={styles.partner}><span>R$</span>{wine.priceMember}</h4>
          </div>
          <div className={styles.priceNonMemberGroup}>
            <h4 className={styles.priceNonMemberTitle}>NÃO SÓCIO R$</h4>
            <h4 className={styles.priceNonMember}>{wine.priceNonMember}</h4>
          </div>
        </div>
        <Link href={'/shoppingCart'}>
          <a className={styles.btn}>Adicionar</a>
        </Link>
      </div>
    </>
  )

}