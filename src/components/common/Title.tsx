interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => (
  <span className="text-[32px] font-semibold text-[#FCFCFC] leading-[32px]">
    {title}
  </span>
);

export default Title;
