const DeleteList = ({ loggedIn, results, setResults }) => {
  const emptyArr = [];
  const resetForm = () => {
    setResults(emptyArr);
  };

  return (
    loggedIn && 
    <div className="text-right">
    <button className="btn btn-outline-danger" onClick={() => resetForm()}>Delete History</button>
    </div>
  );
};

export default DeleteList;
