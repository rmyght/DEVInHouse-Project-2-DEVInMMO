import { LinkMenu, ListItemMenu, UnListMenu } from "./Menu.styles";

// Componente que possuí os menus que são exibidos, News e MMO Games.

export const Menu = () => {
  return (
    <UnListMenu>
      <ListItemMenu><LinkMenu href='/'>News</LinkMenu></ListItemMenu>
      <ListItemMenu><LinkMenu href='/games'>MMO Games</LinkMenu></ListItemMenu>
    </UnListMenu>
  );
}