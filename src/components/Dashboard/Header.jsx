"use client";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const back = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <>
      <div className="flex w-full justify-between my-4">
        <button onClick={back}>
          <Undo2 />
        </button>
        <div className="text-lg font-bold capitalize">{title}</div>
      </div>
    </>
  );
};

export default Header;
