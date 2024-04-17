type ButtonsPrpos = {
  text: string
};

function Buttons({ text }: ButtonsPrpos) {
  return (
    <li>
      <a className="headerNavigation" href="/">{text}</a>
    </li>
  );
}

export default Buttons;
