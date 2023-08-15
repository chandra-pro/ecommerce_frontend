import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async value => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    const newObj = data.products;
    // const result = [newObj];

    const results = newObj.filter(user => {
      return (
        value && user && user.title && user.title.toLowerCase().includes(value)
      );
    });
    setResults(results);
  };

  const handleChange = value => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
};
