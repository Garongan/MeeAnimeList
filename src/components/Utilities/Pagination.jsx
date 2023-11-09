const Pagination = ({ page, lastPage, setPage, range }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page == lastPage) return;
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    if (page == 1) return;
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handlePage = ({ number }) => {
    setPage(number + page);
    scrollTop;
  };

  let pageRange = Array.from({ length: range }, (x, i) => i);

  return (
    <div className="flex justify-center items-center gap-4 pb-6 flex-wrap">
      <button
        className="transition-all hover:text-color-secondary py-2 px-3 bg-color-accent rounded-lg shadow-xl"
        onClick={handlePrevPage}
      >
        Previous
      </button>
      {pageRange.map((number, index) => (
        <button key={index} onClick={handlePage} className="hover:text-color-secondary py-2 px-3 bg-color-accent rounded-lg shadow-xl">
          {number + page}
        </button>
      ))}
      <p className="py-2 px-3 bg-color-accent rounded-lg">of {lastPage}</p>
      <button
        className="transition-all hover:text-color-secondary py-2 px-3 bg-color-accent rounded-lg shadow-xl"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
