import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchFilterExample({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
        onSearch(value); // send value to parent
    }
  };

  return (
    <div className="p-5 bg-dark shadow-sm">
      <Form.Label
        htmlFor="searchInput"
        className="text-warning fw-bold text-uppercase mb-3 display-6"
      >
        Search
      </Form.Label>

      <InputGroup>
        <InputGroup.Text className="bg-warning border-0">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          type="search"
          id="searchInput"
          placeholder="Search for products here ..."
          value={query}
          onChange={handleChange}
          aria-describedby="searchHelpBlock"
          className="border-0 shadow-sm"
        />
      </InputGroup>

      <Form.Text id="searchHelpBlock" className=" text-warning ms-1">
        Type to filter products, news, or any items dynamically.
      </Form.Text>
    </div>
  );
}

export default SearchFilterExample;
