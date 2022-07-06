const CoinTossCounter = ({ loggedIn, results, setResults }) => {
  function updateResults(value) {
    setResults([...results, value]);
  }
  const lis = results.map((result, index) => (
    <li className="list-group-item" key={index}>
      {result === "H" ? "Heads" : "Tails"}
    </li>
  ));

  const randomGenerator = () => {
    const number = Math.floor(Math.random() * 2);
    return number === 1 ? "H" : "T";
  };

  return (
    loggedIn && (
      <div>
        <div className="text-center">
          <button
            class="btn btn-outline-success"
            style={{ marginBottom: "40px" }}
            onClick={() => updateResults(randomGenerator())}
          >
            Roll
          </button>
        </div>
        <div>
          <ul className="list-group text-center">{lis}</ul>
        </div>
      </div>
    )
  );
};

export default CoinTossCounter;
