import { LinkMenu, ListItemMenu, UnListMenu } from "./Menu.styles";

// Componente que possuí os menus que são exibidos, News e MMO Games.

export const Menu = () => {
  return (
    <UnListMenu>
      <ListItemMenu><LinkMenu to="/">News</LinkMenu></ListItemMenu>
      <ListItemMenu><LinkMenu to="/games">MMO Games</LinkMenu></ListItemMenu>
    </UnListMenu>
  );
}