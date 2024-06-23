import "./SectionInfo.css";
import { InfoData } from "../InfoData/InfoData";
import { TitleSectionInfo } from "../TitleSectionInfo/TitleSectionInfo";
import { Button } from "../Button/Button";
import { data } from "@/data";

export const SectionInfo = () => {
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