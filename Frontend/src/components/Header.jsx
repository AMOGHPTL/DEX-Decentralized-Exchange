const Header = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col w-full justify-items-center gap-[10px] text-gray-400">
      <p className="text-[45px] font-semibold text-center">{heading}</p>
      <p className="text-[20px] text-center">{subheading}</p>
    </div>
  );
};

export default Header;
