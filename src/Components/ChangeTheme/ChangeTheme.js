import { ChangeThemeIco } from "./ChangeTheme.styles"
import darkMode from "./icons/dark_mode.svg"
import lightMode from "./icons/light_mode.svg"

export const ChangeTheme = ({ main, setMain }) => {
  const handleChangeTheme = () => {
    setMain(!main)
  }
  const ico = main ? darkMode : lightMode
  return (
    <ChangeThemeIco onClick={handleChangeTheme} src={ico} alt="change" />
  );
};