import { WithPower } from "@/app/helper";
import { SurvivalSection } from "./survival-section/SurvivalSection";
import style from "./Survival.module.css";
import { HeartSvg } from "@/assets/HeartSvg";
import { PersonHeartSvg } from "@/assets/PersonHeartSvg";
import { UnarySistemSvg } from "@/assets/UnarySistemSvg";

export const Survival = () => (
  <div className={style.survival}>
    <p>
      <strong>
        Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно
        среднетяжелое или тяжелое обострение случится в течение 3 лет у 77%
        {WithPower("пациентов", "1")}.
      </strong>
    </p>
    <p>
      В течение 5 лет после первого тяжёлого обострения в живых остаются только
      40% {WithPower("пациентов.", "2")} Прогноз после обострений ХОБЛ схож с
      таковым при сердечной недостаточности, инфаркте миокарда и некоторых
      злокачественных опухолях.
    </p>
    <h3>Пятилетняя выживаемость пациентов</h3>
    <div className={style.survivalSection}>
      {data.map((el, key) => (
        <SurvivalSection key={key} img={el.img} index={key}>
          {el.component}
        </SurvivalSection>
      ))}
    </div>
  </div>
);

const Text1 = () => {
  return (
    <div className={style.text}>
      <h4>45,5%</h4>
      <p>
        пациентов с{" "}
        <strong>сердечной {WithPower("недостаточностью", "1")}</strong>
      </p>
      <span>Популяционное когортное исследование (N=385)</span>
    </div>
  );
};
const Text2 = () => {
  return (
    <div className={style.text}>
      <h4>55,3%</h4>
      <p>
        пациентов с <strong>инфарктом {WithPower("миокарда", "1")}</strong>
      </p>
      <span>Апостериорный анализ когортного исследования (N=2887)</span>
    </div>
  );
};
const Text3 = () => {
  return (
    <div className={style.text}>
      <h4>50,5%</h4>
      <p>
        пациентов с <strong>раком мочевого пузыря</strong>
      </p>
      <span>Исследование Национальной статистической службы (N=42642)</span>
    </div>
  );
};
const data = [
  { component: <Text1 />, img: <HeartSvg /> },
  { component: <Text2 />, img: <PersonHeartSvg /> },
  { component: <Text3 />, img: <UnarySistemSvg /> },
];
