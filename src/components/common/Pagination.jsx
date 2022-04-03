import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === null) {
    return;
  }
  const pageNumbersArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbersArr.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbersArr.length > 1
            ? pageNumbersArr.map((page) => {
                return (
                  <li
                    key={page}
                    className={
                      page === currentPage ? "page-item active" : "page-item"
                    }
                  >
                    <a className="page-link" onClick={() => onPageChange(page)}>
                      {page}
                    </a>
                  </li>
                );
              })
            : ""}
        </ul>
      </nav>
    </>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
