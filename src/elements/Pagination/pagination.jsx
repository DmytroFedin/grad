import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Style from './pagination.module.scss'

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination = (props) => {
  const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

  const totalPages = Math.ceil(props.totalRecords / props.pageLimit);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    gotoPage(1);
  }, [props.products]);

  const gotoPage = (page) => {
    const { onPageChanged = (f) => f } = props;

    const currentPage = Math.max(0, Math.min(page, totalPages));

    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: props.pageLimit,
      totalRecords: props.totalRecords
    };

    setCurrentPage(currentPage);
    onPageChanged(paginationData);
  };

  const handleClick = (page, evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveBegining = (evt) => {
    evt.preventDefault();
    gotoPage(1);
  };

  const handleMoveEnd = (evt) => {
    evt.preventDefault();
    gotoPage(totalPages);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage - props.pageNeighbours);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage + props.pageNeighbours);
  };

  const fetchPageNumbers = () => {
    const pageNeighbours = props.pageNeighbours;

    const totalNumbers = props.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;
      const begining = 'BEGINING'
      const end = 'END'

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [begining, leftSpillPage, ...extraPages, ...pages, totalPages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        
        pages = [1, ...pages, ...extraPages, rightSpillPage, end];
      } else if (leftSpill && rightSpill) {
        pages = [begining, leftSpillPage, ...pages, rightSpillPage, end];
      }

      return [ ...pages];
    }

    return range(1, totalPages);
  };


  const pages = fetchPageNumbers();

  return (
    <React.Fragment>
      <nav aria-label="Countries Pagination">
        <ul className={Style.paginationWrapper}>
          {pages.map((page, index) => {

            if (page === 'BEGINING')
            return (
              <li key={index} className={Style.pageItem}>
                <a
                  className={Style.pageLink}
                  href="/"
                  aria-label="Previous"
                  onClick={handleMoveBegining}
                >
                  <span aria-hidden="true">|&laquo;</span>
                  {/* <span className="sr-only">Previous</span> */}
                </a>
              </li>
            );

            if (page === 'END')
            return (
              <li key={index} className={Style.pageItem}>
                <a
                  className={Style.pageLink}
                  href="/"
                  aria-label="Previous"
                  onClick={handleMoveEnd}
                >
                  <span aria-hidden="true">&raquo;|</span>
                  {/* <span className="sr-only">Previous</span> */}
                </a>
              </li>
            );

            if (page === LEFT_PAGE)
              return (
                <li key={index} className={Style.pageItem}>
                  <a
                    className={Style.pageLink}
                    href="/"
                    aria-label="Previous"
                    onClick={handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    {/* <span className="sr-only">Previous</span> */}
                  </a>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className={Style.pageItem}>
                  <a
                    className={Style.pageLink}
                    href="/"
                    aria-label="Next"
                    onClick={handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    {/* <span className="sr-only">Next</span> */}
                  </a>
                </li>
              );

            return (
              <li
                key={index}
                className={(currentPage === page ?  Style.pageItemActive : Style.pageItem)}
              >
                <a
                  className={Style.pageLink}
                  href="/"
                  onClick={(e) => handleClick(page, e)}
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;