interface IFilterButton {
  toggle: () => void;
}

const FilterButton = ({ toggle }: IFilterButton) => {
  return (
    <div
      className="flex py-2 px-4 items-center gap-2 rounded-xl border-2 border-[#272B30]"
      onClick={() => toggle()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 2H4C2.89543 2 2 2.89543 2 4V5.94794C2 6.60653 2.32423 7.22291 2.86694 7.59602L10 12.5V20.3415C10 21.0945 10.8008 21.5774 11.4668 21.2259L13.4668 20.1703C13.7947 19.9972 14 19.6568 14 19.2859V12.5L21.1331 7.59602C21.6758 7.22291 22 6.60653 22 5.94794V4C22 2.89543 21.1046 2 20 2Z"
          fill="#6F767E"
        />
      </svg>
      <span className="text-sm font-semibold text-[#6F767E]">Filter</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6F767E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default FilterButton;
