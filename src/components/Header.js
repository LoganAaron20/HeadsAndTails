function Header({ loggedIn, handleClick }) {
  return (
    <button className="btn btn-primary btn-lg btn-block" onClick={handleClick}>
      {loggedIn ? "Quit" : "Play"}
    </button>
  );
}

export default Header;
