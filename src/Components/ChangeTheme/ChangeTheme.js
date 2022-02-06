import { ChangeThemeIco } from "./ChangeTheme.styles"
import darkMode from "./icons/dark_mode.svg"
import lightMode from "./icons/light_mode.svg"

export const ChangeTheme = ({ main, setMain }) => {
  const handleChangeTheme = () => {
    setMain(!main)
  }
  const ico = main ? darkMode : lightMode
  return (
    <ChangeThemeIco type="image" onClick={handleChangeTheme} src={ico} alt="Change Theme Icons" />
    // <input type="image" alt='TEXTE' src={ico} onClick={handleChangeTheme} height="80" width="170"/>
  );
};