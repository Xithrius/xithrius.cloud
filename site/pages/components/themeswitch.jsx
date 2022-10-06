import {
  TbSun,
  TbMoon,
} from "react-icons/tb";

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleClick = _ => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button className="h-8 w-8 relative transition-opacity duration-400" onClick={handleClick}>
      <TbSun className={`absolute h-6 w-6 ${resolvedTheme === "light" ? "" : "rotate-180 opacity-0"}`} />
      <TbMoon className={`absolute h-6 w-6 ${resolvedTheme === "dark" ? "" : "rotate-180 opacity-0"}`} />
    </button>
  )
}

export default ThemeSwitch
