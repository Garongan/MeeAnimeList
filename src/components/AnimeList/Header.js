import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <>
      <div className="flex justify-between items-center py-6">
        <div className="text-lg font-bold capitalize">{title}</div>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="md:text-md text-sm underline hover:text-color-secondary transition-colors duration-300 lowercase"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
