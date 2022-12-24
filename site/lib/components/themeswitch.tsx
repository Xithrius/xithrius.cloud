import { TbSun, TbMoon } from "react-icons/tb";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    document.body.classList.add("transition-colors");
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="absolute right-8 top-8 flex justify-center">
      <button className="duration-400 h-6 w-6 transition-opacity" onClick={handleClick}>
        <TbSun
          className={`absolute top-0 right-0 h-6 w-6 ${
            resolvedTheme === "light" ? "" : "rotate-180 opacity-0"
          }`}
        />
        <TbMoon
          className={`absolute top-0 right-0 h-6 w-6 ${
            resolvedTheme === "dark" ? "" : "rotate-180 opacity-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeSwitch;
