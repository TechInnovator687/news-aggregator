import { News } from "@container/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsProvider } from "./context/NewsContext";
import { SidePanel } from "@components/Sidebar";
import { FilterSearch } from "@container/Search";
import { Preference } from "@container/Preference";

const App = () => {
  return (
    <Router>
      <NewsProvider>
        <Routes>
          <Route path="/" element={<SidePanel />}>
            <Route index element={<News />} />
            <Route path="/search" element={<FilterSearch />} />
            <Route path="/preferences" element={<Preference />} />
          </Route>
        </Routes>
      </NewsProvider>
    </Router>
  );
};

export default App;
