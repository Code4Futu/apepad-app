function Pagination() {
  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between items-center">
        <div className="space-x-1 md:space-x-2">
          <button className="btn btn-sm rounded-full disabled">
            <i className="fa-solid fa-angle-left mr-2"></i>
            Prev
          </button>
          <button className="btn btn-sm rounded-full">
            Next
            <i className="fa-solid fa-angle-right ml-2"></i>
          </button>
        </div>
        <div className="text-base-content/70 mt-2 lg:mt-0 text-xs font-medium">
          Showing: 1 - 10 of 45
        </div>
      </div>
    </>
  );
}
export default Pagination;
