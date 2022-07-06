import Header from "./Header";

const Content = ({ loggedIn, setLoggedIn }) => {
  function toggleLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div
      style={{ backgroundColor: "lightblue" }}
      className="jumbotron jumbotron-fluid"
    >
      <div className="container">
        <h1 className="display-4">Coin Flip</h1>
        <p className="lead">Press "Play" to test your luck!</p>
      </div>
      <Header loggedIn={loggedIn} handleClick={toggleLoggedIn} />
    </div>
  );
};

export default Content;
