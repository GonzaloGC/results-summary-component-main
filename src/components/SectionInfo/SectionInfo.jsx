import "./SectionInfo.css";
import { InfoData } from "../InfoData/InfoData";
import { TitleSectionInfo } from "../TitleSectionInfo/TitleSectionInfo";
import { Button } from "../Button/Button";
// import data from "../../data.json";

export const SectionInfo = () => {
  
  const data = [
    {
      nameInfo: "Reaction",
      primaryNumber: "80",
      secondNumber: "100",
      icon:"/icon/icon-Reaction.svg",
      bg: "red",
      color: "red",
    },
    {
      nameInfo: "Memory",
      primaryNumber: "92",
      secondNumber: "100",
      icon:"/icon/icon-Memory.svg",
      bg: "yellow",
      color: "yellow",
    },
    {
      nameInfo: "Verbal",
      primaryNumber: "61",
      secondNumber: "100",
      icon:"/icon/icon-Verbal.svg",
      bg: "green",
      color: "green",
    },
    {
      nameInfo: "Visual",
      primaryNumber: "72",
      secondNumber: "100",
      icon:"/icon/icon-Visual.svg",
      bg: "blue",
      color: "blue",
    },
  ];

  return (
    <section className="infoSummary">
      <TitleSectionInfo title="Summary" />
      <section className="groupInfoData">
        {data.map((data) => (
          <div key={data.nameInfo}>
            <InfoData
              icon={data.icon}
              nameInfo={data.nameInfo}
              primaryNumber={data.primaryNumber}
              secondNumber={data.secondNumber}
              color={data.color}
              bg={data.bg}
            />
          </div>
        ))}
      </section>
      <Button msg="Continue" />
    </section>
  );
};