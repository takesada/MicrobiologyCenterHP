import './App.css';
import { Route, Routes } from "react-router-dom";
import { TopPage } from './pages/TopPage';
import { ForSalePage } from './pages/forSalePage';
import { BackUpPage } from './pages/backUpPage';
import { DepositPage } from './pages/depositPage';
import { CatalogDocPage } from './pages/catalogDocPage';
import { RelatedInstiPage } from './pages/relatedInstiPage';
import { LatestNewsPage } from './pages/latestNewsPage';
import { RelatedAcademicPage } from './pages/relatedAcademicPage';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/services" element={<ForSalePage />} />
        <Route path="/backup" element={<BackUpPage />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/catalogueDoc" element={<CatalogDocPage/>}/>
        <Route path="/relatedInstiPage" element={<RelatedInstiPage />}/>
        <Route path="/relatedAcademicPage" element={<RelatedAcademicPage/>}/>
        <Route path="/latestNewsPage" element={<LatestNewsPage />}/>
      </Routes>
  );
};

export default App;
