import SidePanel from "@components/SidePanel/SidePanel";
import { News } from "@container/News";
import Preference from "@container/Preference/Preference";
import Search from "@container/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsProvider } from "./context/NewsContext";

const App = () => {
  return (
    <Router>
      <NewsProvider>
        <Routes>
          <Route path="/" element={<SidePanel />}>
            <Route index element={<News />} />
            <Route path="/search" element={<Search />} />
            <Route path="/preferences" element={<Preference />} />
          </Route>
        </Routes>
      </NewsProvider>
    </Router>
  );
};

export default App;
