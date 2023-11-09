const HeaderMenu = ({ title }) => {
  return (
    <>
      <div className="flex justify-between items-center py-6">
        <div className="text-lg font-bold capitalize">{title}</div>
      </div>
    </>
  );
};

export default HeaderMenu;
