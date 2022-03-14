const Header = (props) => {
  return (
    <header>
      <h1>100 Days of Rust</h1>
      <h2>Today is: {props.today.toLocaleDateString()}</h2>
    </header>
  );
};

export default Header;
