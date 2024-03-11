import style from "./page.module.css";
import { Main } from "./pages/main/Main";
import { BackgroundSvg1 } from "@/assets/backgrounds/BackgroundSvg1";
import { BackgroundSvg2 } from "@/assets/backgrounds/BackgroundSvg2";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.bgSvg2}>
        <BackgroundSvg2 />
      </div>
      <div className={style.inside}>
        <div className={style.bgSvg1}>
          <BackgroundSvg1 />
        </div>
        <Main />
      </div>
    </main>
  );
}
