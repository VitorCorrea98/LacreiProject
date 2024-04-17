type ButtonsPrpos = {
  text: string
};

function Buttons({ text }: ButtonsPrpos) {
  return (
    <a href="/">{text}</a>
  );
}

export default Buttons;
