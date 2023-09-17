function Filters({ season, changeSeason }) {
  const seasons = [...new Array(6)];

  return (
    <div className="btn-group p-3">
      {seasons.map((s, i) => (
        <button
          key={i}
          className="btn btn-primary"
          onClick={() => changeSeason(i + 1)}
        >
          S{i + 1}
        </button>
      ))}
    </div>
  );
}

export default Filters;
