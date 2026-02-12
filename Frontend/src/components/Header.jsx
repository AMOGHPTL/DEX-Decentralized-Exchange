const Header = ({ heading, subheading }) => {
  return (
    <div className="w-full justify-items-center text-gray-400">
      <p className="text-[45px] font-semibold">{heading}</p>
      <p className="text-[20px]">{subheading}</p>
    </div>
  );
};

export default Header;
