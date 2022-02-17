import { setItemLS } from "../../helper/utilLocalStorage";
import { ChangeThemeIco } from "./ChangeTheme.styles";
import darkMode from "./icons/dark_mode.svg";
import lightMode from "./icons/light_mode.svg";

// Componente para alterar o "theme", que pode ser o Main (Light Colors) e o Dark.
// Este componente possui um ícone em formato de Lua (Dark) ou Sol (Main/Light).
export const ChangeTheme = ({ main, setMain }) => {
  const handleChangeTheme = () => {
    main === 'main' ? setMain('dark') : setMain('main');
    main === 'main' ? setItemLS('theme', 'dark') : setItemLS('theme', 'main');
  };
  const ico = main === 'main' ? darkMode : lightMode
  return (
    <ChangeThemeIco type="image" onClick={handleChangeTheme} src={ico} alt="Change Theme Icons" />
  );
};