import React, { ReactNode } from 'react'
import styles from "../page.module.css";

type Props = {
  children : ReactNode;
  modal : ReactNode;
}

export default function BeforeLoginLayout({children, modal} : Props) {
  return (
    <>
        before Login
        <div className= {styles.container}>
        {children}
        </div>
        {modal}
    </>
  )
}
