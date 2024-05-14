import "./App.css";
import '@fontsource-variable/hanken-grotesk';
import { Header } from "./components/Header/Header";
import { SectionInfo } from "./components/SectionInfo/SectionInfo";

function App() {
  return (
    <>
      <Header title="Your Result"/>
      <SectionInfo />
    </>
  );
}

export default App;
