import { useTheme } from "styled-components";
import { LinkMenu, ListItemMenu, UnListMenu } from "./Menu.styles";

export const Menu = () => {
  // const theme = useTheme();
  return (
    <UnListMenu>
      <ListItemMenu><LinkMenu href='/'>News</LinkMenu></ListItemMenu>
      <ListItemMenu><LinkMenu href='/games'>MMO Games</LinkMenu></ListItemMenu>
      {/* <ListItemMenu><LinkMenu href='/about'>About</LinkMenu></ListItemMenu> */}
    </UnListMenu>
  );
}