import Buttons from '../../components/Buttons';

function Header() {
  const ButtonsText = ['Quem somos', 'Ajuda', 'Entrar'];

  return (
    <header>
      <img
        src="/src/assets/images/header/LacreiLogoHeader.png"
        alt="Botão de navegação"
      />
      <ul>
        {ButtonsText.map((text) => (
          <Buttons key={ text } text={ text } />
        ))}
      </ul>
    </header>
  );
}

export default Header;
