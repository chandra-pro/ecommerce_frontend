export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <p>{result.title}</p>;
      })}
    </div>
  );
};
