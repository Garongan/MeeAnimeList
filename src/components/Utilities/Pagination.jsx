import { useMemo } from "react";

const Pagination = ({ page, lastPage, setPage, totalItems }) => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page === lastPage) return;
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handlePage = (number) => {
    setPage(number);
    scrollTop();
  };

  const calculateRange = Math.ceil(totalItems / 25);
  const range = calculateRange >= 5 ? 5 : calculateRange;

  const calculatePageRange = () => {
    if (page <= range) {
      // If the current page is within the first range, show first `range` pages
      return Array.from({ length: range }, (_, i) => i + 1);
    } else if (page >= lastPage - range + 2) {
      // If the current page is within the last range, show last `range` pages
      return Array.from({ length: range }, (_, i) => lastPage - range + i + 1);
    } else {
      // Show a range around the current page
      return Array.from(
        { length: range },
        (_, i) => page - Math.floor(range / 2) + i
      );
    }
  };

  const pageRange = useMemo(
    () => calculatePageRange(),
    [page, range, lastPage]
  );

  return (
    <div className="flex justify-center items-center gap-4 pb-6 flex-wrap">
      {page === 1 ? null : (
        <button
          className="transition-all hover:text-color-secondary py-2 px-3 bg-color-accent rounded-lg shadow-xl"
          onClick={handlePrevPage}
        >
          Previous
        </button>
      )}

      {pageRange.map((number) => (
        <button
          key={number}
          onClick={() => handlePage(number)}
          className={`${
            number === page
              ? "text-color-accent bg-color-secondary"
              : "hover:text-color-secondary bg-color-accent"
          } py-2 px-3 rounded-lg shadow-xl`}
        >
          {number}
        </button>
      ))}
      <p className="py-2 px-3 bg-color-accent rounded-lg">of {lastPage}</p>
      {page >= lastPage ? null : (
        <button
          className="transition-all hover:text-color-secondary py-2 px-3 bg-color-accent rounded-lg shadow-xl"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
