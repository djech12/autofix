import React from "react";
import { useTheme } from "../ThemeContext.jsx"; // tvůj context
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="var2 swap swap-rotate fixed bottom-4 right-4 z-50">
      {/* checkbox ovládá stav */}
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />

      {/* slunce */}
      <div className="swap-off">
        <Sun className="size-10"/>
      </div>

      {/* měsíc */}
      <div className="swap-on">
        <Moon className="size-10"/>
      </div>
    </label>
  );
};

export default ThemeToggle;
