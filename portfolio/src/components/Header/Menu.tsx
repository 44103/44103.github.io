const Menu = ({
  handleMenu = () => {},
  mode,
}: {
  handleMenu?: React.MouseEventHandler<HTMLLIElement>;
  mode: string;
}) => {
  const menuItems = [
    "About",
    "Projects",
    "Skill",
    "Bookshelf",
    "Contact",
    "Resume",
  ];

  return (
    <>
      {mode === "mobile"
        ? menuItems.map((value) => {
            return (
              <li onClick={handleMenu}>
                <a href={`/#${value.toLowerCase()}`}>{`|> ${value}()`}</a>
              </li>
            );
          })
        : menuItems.map((value) => {
            return (
              <li onClick={handleMenu}>
                <a href={`/#${value.toLowerCase()}`}>{`.${value}()`}</a>
              </li>
            );
          })}
    </>
  );
};

export default Menu;
