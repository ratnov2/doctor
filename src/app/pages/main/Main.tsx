"use client";
import { Focus } from "./focus/Focus";
import { useState } from "react";
import { HobbleSection } from "./hobl-section/HobleSection";
import style from "./Main.module.css";
import { PersonSvg } from "@/assets/PersonSvg";
import { LightningSvg } from "@/assets/LightningSvg";
import { ClientPortal } from "./modals/Portal";
import { Survival } from "./modals/survival/Survival";
import { Statistics } from "./modals/statistics/Statistics";

export const Main = () => {
  const handleVisibleModal = (type: "blue" | "green" | null) => {
    setShowPortal(type);
  };
  const [showPortal, setShowPortal] = useState<null | "blue" | "green">(null);

  return (
    <div className={style.main}>
      {showPortal && (
        <ClientPortal
          show={true}
          onHandlerClose={() => handleVisibleModal(null)}
        >
          {showPortal === "green" ? (
            <Survival />
          ) : showPortal === "blue" ? (
            <Statistics />
          ) : null}
        </ClientPortal>
      )}
      <h1>ХОБЛ: мифы и реальность</h1>
      <div className={style.hobbleSection}>
        <HobbleSection
          text={HobbleSectionData.section1}
          svg={<PersonSvg />}
          styleButton="blue"
          handleVisibleModal={() => handleVisibleModal("blue")}
        >
          <p className={style.p}>
            ХОБЛ болеют <strong>преимущественно мужчины?</strong>
          </p>
        </HobbleSection>

        <HobbleSection
          text={HobbleSectionData.section2}
          svg={<LightningSvg />}
          styleButton="green"
          handleVisibleModal={() => handleVisibleModal("green")}
        >
          <p className={style.p}>
            <strong> Опасно</strong> не наличие заболевания, а обострения?
          </p>
        </HobbleSection>
      </div>
      <Focus />
    </div>
  );
};

const HobbleSectionData = {
  section1: ` В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene)
      среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено
      преобладание...
    `,
  section2: `Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...`,
};

