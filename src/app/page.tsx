import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import aLogo from '../../public/aLogo.png'

export default function Home() {
  return (
    <div className={styles.left}>
      <div>
        <Image src = {aLogo} alt = "logo" />
      </div>
      <div>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href = "/i/flow/signup">계정 만들기</Link>
      </div>
    </div>
  );
}
