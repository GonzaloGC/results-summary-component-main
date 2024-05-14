import "./SectionInfo.css";
// import "App.css";
import { InfoData } from "../InfoData/InfoData";
import { TitleSectionInfo } from "../TitleSectionInfo/TitleSectionInfo";
import { Button } from "../Button/Button";

export const SectionInfo = () => {
  return (
    <section className="infoSummary">
      <TitleSectionInfo title="Summary" />
      {/* <GroupInfoData /> */}
      <section className="groupInfoData">
        <InfoData nameInfo="Reaction" primaryNumber="80" secondNumber="100" />
        <InfoData nameInfo="Memory" primaryNumber="92" secondNumber="100" />
        <InfoData nameInfo="Verbal" primaryNumber="61" secondNumber="100" />
        <InfoData nameInfo="Visual" primaryNumber="72" secondNumber="100" />
      </section>
      <Button msg="Continue" />
    </section>
  );
};
