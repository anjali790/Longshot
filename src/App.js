import './App.css';
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./components/Links/Main/Main";
import { Dashboard } from "./components/Links/Dashboard/Dashboard";
import { Recipes } from "./components/Links/Recipes/Recipes";
import { Blog } from "./components/Links/Blog/Blog";
import { Template } from "./components/Links/Template/Template";
import { Favourite } from "./components/Links/Favourite/Favourite";
import { CustomTemplate } from "./components/Links/CustomTemplate/CustomTemplate";
import { Integration } from "./components/Links/Integration/Integration";
import { Semrush } from "./components/Links/Semrush/Semrush";

function App() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/templates" element={<Template />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/custom" element={<CustomTemplate />} />
          <Route path="/integrations" element={<Integration />} />
          <Route path="/semrush" element={<Semrush />} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;