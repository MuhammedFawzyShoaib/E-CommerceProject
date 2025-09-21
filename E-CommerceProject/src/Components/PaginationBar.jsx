import { Pagination, Form, InputGroup } from "react-bootstrap";

const PaginationBar = ({ page, totalPages, onPageChange }) => {
  const visiblePages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) visiblePages.push(i);
  } else {
    visiblePages.push(1, 2, 3, "...", totalPages - 1, totalPages);
  }

  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <Pagination>
        <Pagination.Prev
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        />
        {visiblePages.map((p, idx) =>
          p === "..." ? (
            <Pagination.Ellipsis key={idx} disabled />
          ) : (
            <Pagination.Item
              key={p}
              active={p === page}
              onClick={() => onPageChange(p)}
            >
              {p}
            </Pagination.Item>
          )
        )}
        <Pagination.Next
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        />
      </Pagination>

      <InputGroup style={{ width: "120px" }}>
        <Form.Control
          type="number"
          min="1"
          max={totalPages}
          placeholder="Go to..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const val = Number(e.target.value);
              if (val >= 1 && val <= totalPages) onPageChange(val);
            }
          }}
        />
      </InputGroup>
    </div>
  );
};

export default PaginationBar;
