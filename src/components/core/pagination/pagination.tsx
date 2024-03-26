interface PaginationProps {
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleSelectTake?: (take: number) => void;
  totalRecord: number;
  currentPage: number;
  currentShow: number;
  take?: number;
}

const limits = [
  { name: "10", value: 10 },
  { name: "20", value: 20 },
  { name: "50", value: 50 },
];

function Pagination(props: PaginationProps) {
  const {
    handleNextPage,
    handlePrevPage,
    handleSelectTake,
    totalRecord,
    currentPage,
    take = 0,
    currentShow,
  } = props;

  const totalPages = Math.ceil(totalRecord / (take !== 0 ? take : 10));

  const renderSelectTake = () => {
    return (
      <div className="dropdown dropdown-end text-xs mr-3">
        <label tabIndex={0} className="dropdown-toggle">
          <button className="dropdown-toggle-title">
            <span className="flex items-center">
              <span className="truncate">{take}</span>
            </span>
            <i className="fa-solid fa-angle-down ml-2"></i>
          </button>
        </label>
        <div tabIndex={0} className="dropdown-content menu ">
          {limits.map((item, idx) => (
            <button
              key={idx}
              className={`dropdown-menu-item ${
                item.value === take && "isActive"
              }`}
              onClick={() => {
                if (handleSelectTake) {
                  handleSelectTake(item.value);
                }
              }}
            >
              <span className="flex items-center">
                <span className="truncate">{item.name}</span>
              </span>
              {item.value === take && (
                <i className="fa-solid fa-check ml-2"></i>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between gap-x-4">
      <div className="text-base-content/70 mt-2 lg:mt-0 font-medium">
        Showing: {currentShow} {`of ${totalRecord}`}
      </div>
      <div className="space-x-2">
        {take > 0 && renderSelectTake()}

        <button
          className={`btn btn-sm rounded-full cursor-pointer ${
            currentPage === 1 && "disabled"
          } `}
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          <i className="fa-solid fa-angle-left mr-2"></i>
          Prev
        </button>

        <button
          className={`btn btn-sm rounded-full cursor-pointer ${
            currentPage === totalPages && "disabled"
          }`}
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
          <i className="fa-solid fa-angle-right ml-2"></i>
        </button>
      </div>
    </div>
  );
}
export default Pagination;
