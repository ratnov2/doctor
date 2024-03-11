import Image from "next/image";
import style from "./Statistics.module.css";
import statisPng from "@/assets/statist.png";

export const Statistics = () => (
  <div className={style.statistics}>
    <p>
      В десятилетнем исследовании{" "}
      <strong>«Генетическая эпидемиология ХОБЛ» (COPDGene)</strong>
      среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено
      <strong> преобладание женщин (66%)</strong>, а в возрасте 60-64 лет
      количество женщин и мужчин.
    </p>
    <p>
      Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть
      связано с тем, что дыхательные пути курящих женщин имеют более{" "}
      <strong>высокий процент площади стенок</strong>, но меньшую площадь
      просвета, внутренний диаметр и толщину дыхательных путей по сравнению с
      курящими мужчинами.
    </p>
    <Image alt="statistics" src={statisPng} style={{ width: "100%" }} />
  </div>
);
