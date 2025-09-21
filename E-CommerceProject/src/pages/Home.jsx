// pages/Home.jsx
import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "../components/Home/ProductCard";
import PaginationBar from "../components/Home/PaginationBar";
import SearchBar from "../components/searchbar/SearchBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 24;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchProducts = (pageNum, category = null) => {
    setLoading(true);

    let url = `https://dummyjson.com/products?limit=${limit}&skip=${
      (pageNum - 1) * limit
    }`;

    if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${
        (pageNum - 1) * limit
      }`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setOriginalProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const totalPages = Math.ceil(total / limit);

  // ✅ Search
  const handleSearch = (query) => {
    if (!query) {
      setProducts(originalProducts);
    } else {
      setProducts(
        originalProducts.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  // ✅ Filter
  const handleFilter = ({ category }) => {
    setPage(1);
    if (!category) {
      fetchProducts(1); // كل المنتجات
    } else {
      fetchProducts(1, category); // منتجات كاتيجوري معين
    }
  };

  // ✅ Sort
  const handleSort = ({ field, order }) => {
    if (!field) {
      setProducts([...originalProducts]);
      return;
    }

    const sorted = [...products].sort((a, b) => {
      if (order === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setProducts(sorted);
  };

  return (
    <div className="container mt-4 mb-5">
      {/* 🔍 Search + Filter + Sort */}
      <div className="mb-4">
        <SearchBar
          onSearch={handleSearch}
          onFilter={handleFilter}
          onSort={handleSort}
        />
      </div>

      {/* 📦 Products with Pagination */}
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row xs={1} md={3} lg={4} className="g-4">
            {products.map((product) => (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>

          <PaginationBar
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
