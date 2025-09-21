import { useState, useEffect } from "react";
import { Form, Button, InputGroup, Dropdown } from "react-bootstrap";

function SearchBar({ onSearch, onFilter, onSort }) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // ✅ Fetch categories from API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleFilterClick = () => {
    onFilter({ category });
  };

  const handleSortClick = () => {
    if (sortField) {
      onSort({ field: sortField, order: sortOrder });
    }
  };

  const handleResetSort = () => {
    setSortField("");
    setSortOrder("asc");
    // نبعت إشارة إن مفيش sort مطبق
    onSort({ field: null, order: null });
  };

  return (
    <div className="p-3 bg-dark rounded shadow-sm d-flex gap-3 flex-wrap">
      {/* 🔍 Search */}
      <InputGroup style={{ maxWidth: "300px" }}>
        <InputGroup.Text className="bg-warning border-0">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          type="search"
          placeholder="Search products..."
          value={query}
          onChange={handleSearchChange}
          className="border-0 shadow-sm"
        />
      </InputGroup>

      {/* 🗂 Category Dropdown (Grid) */}
      <Dropdown>
        <Dropdown.Toggle variant="warning">
          {category ? `Category: ${category}` : "Select Category"}
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="p-2"
          style={{
            maxHeight: "250px",
            overflowY: "auto",
            minWidth: "320px"
          }}
        >
          <div
            className="d-grid"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              display: "grid",
              gap: "6px"
            }}
          >
            {categories.map((cat, index) => (
              <Button
                key={index}
                variant="outline-dark"
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Button>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="warning" onClick={handleFilterClick} disabled={!category}>
        Apply Filter
      </Button>

      {/* ↕️ Sort */}
      <Dropdown>
        <Dropdown.Toggle variant="warning">
          {sortField ? `Sort: ${sortField}` : "Sort By"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSortField("title")}>
            Title
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSortField("price")}>
            Price
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSortField("rating")}>
            Rating
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Form.Select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{ maxWidth: "150px" }}
        disabled={!sortField}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Form.Select>

      <Button variant="warning" onClick={handleSortClick} disabled={!sortField}>
        Apply Sort
      </Button>

      {/* 🔄 Reset Sort */}
      <Button variant="secondary" onClick={handleResetSort}>
        Reset Sort
      </Button>
    </div>
  );
}

export default SearchBar;
