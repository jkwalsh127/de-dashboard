import MainContent from "./components/MainContent/MainContent";
import SupportingContent from "./components/SupportingConent/SupportingContent";
import Header from "./components/Header/Header";


export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <SupportingContent />
        <MainContent />
      </div>
    </div>
  );
}