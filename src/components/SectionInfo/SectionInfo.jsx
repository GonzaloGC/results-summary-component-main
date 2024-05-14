import "./SectionInfo.css";
import { InfoData } from "../InfoData/InfoData";
import { TitleSectionInfo } from "../TitleSectionInfo/TitleSectionInfo";
import { Button } from "../Button/Button";

export const SectionInfo = () => {
  return (
    <section className="infoSummary">
      <TitleSectionInfo title="Summary" />
      <section className="groupInfoData">
        <InfoData color="red" nameInfo="Reaction" primaryNumber="80" secondNumber="100" />
        <InfoData color="yellow" nameInfo="Memory" primaryNumber="92" secondNumber="100" />
        <InfoData color="green" nameInfo="Verbal" primaryNumber="61" secondNumber="100" />
        <InfoData color="blue" nameInfo="Visual" primaryNumber="72" secondNumber="100" />
      </section>
      <Button msg="Continue" />
    </section>
  );
};
