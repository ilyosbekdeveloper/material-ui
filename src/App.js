import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Buttons from "./pages/Buttons";
import IconsMaterial from "./pages/IconsMaterialUi";
import DataDisplay from "./pages/DataDisplay";
import ButtonGroup1 from "./pages/ButtonGroup";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    localStorage.setItem('theme', JSON.stringify(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Main toggleTheme={toggleTheme} theme={theme}/>}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="icons" element={<IconsMaterial />} />
          <Route path="datadisplay" element={<DataDisplay />} />
          <Route path="buttongroup" element={<ButtonGroup1 />} />
        </Route>

        {/* not found section */}
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", paddingTop: "30px" }}>
              404 <br /> Not found
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
/*// const [theme, setTheme] = useState("light");

  const theme = useSelector((state) => state.isDarkTheme);
  console.log(theme);
  const setTheme = (theme) =>
    dispatch({ type: "CHANGE_THEME", payload: theme });



  // useEffect(() => {
  //   const localTheme = localStorage.getItem("theme");
  //   localTheme && setTheme(JSON.parse(localTheme));
  // }, []);

  const toggleTheme = () => {
    theme ? setTheme("dark") : setTheme("light");
    localStorage.setItem(
      "theme",
      JSON.stringify(theme ? "light" : "dark")
    );
  };*/