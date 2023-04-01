const Menu = ({
  handleMenu = () => {},
  mode,
}: {
  handleMenu?: React.MouseEventHandler<HTMLLIElement>;
  mode: string;
}) => {
  const menuItems = ["About", "Skill", "Bookshelf", "Resume"];

  return (
    <>
      {mode === "mobile"
        ? menuItems.map((value) => {
            return (
              <li onClick={handleMenu} className="ml-5">
                <a href={`/#${value.toLowerCase()}`}>{`|> ${value}()`}</a>
              </li>
            );
          })
        : menuItems.map((value, index) => {
            return (
              <li onClick={handleMenu}>
                <a href={`/#${value.toLowerCase()}`}>
                  {`.${value}()`}
                  {menuItems.length - 1 === index ? ";" : ""}
                </a>
              </li>
            );
          })}
    </>
  );
};

export default Menu;
