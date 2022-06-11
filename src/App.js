import React from "react";
import "./App.css";
import DashBoard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import { ThemeProvider } from "./context/ThemeContext";
import SidebarState from "./context/SidebarState";

function App() {
  return (
      <SidebarState>
        <ThemeProvider>
          <SideBar />
          <DashBoard />
        </ThemeProvider>
      </SidebarState>
  );
}

export default App;
