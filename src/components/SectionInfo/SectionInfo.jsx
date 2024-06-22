import "./SectionInfo.css";
import { InfoData } from "../InfoData/InfoData";
import { TitleSectionInfo } from "../TitleSectionInfo/TitleSectionInfo";
import { Button } from "../Button/Button";

export const SectionInfo = () => {
  const data = [
    {
      nameInfo: "Reaction",
      primaryNumber: "80",
      secondNumber: "100",
      bg: "red",
      color: "red",
    },
    {
      nameInfo: "Memory",
      primaryNumber: "92",
      secondNumber: "100",
      bg: "yellow",
      color: "yellow",
    },
    {
      nameInfo: "Verbal",
      primaryNumber: "61",
      secondNumber: "100",
      bg: "green",
      color: "green",
    },
    {
      nameInfo: "Visual",
      primaryNumber: "72",
      secondNumber: "100",
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
              bg={data.bg}
              color={data.color}
              nameInfo={data.nameInfo}
              primaryNumber={data.primaryNumber}
              secondNumber={data.secondNumber}
            />
          </div>
        ))}
      </section>
      <Button msg="Continue" />
    </section>
  );
};