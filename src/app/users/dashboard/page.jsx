import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <>
      <div className="absolute inset-x-0 bg-color-dark">
        <div className="container flex items-center justify-around py-6 text-color-primary z-0">
          <div className="text-[300%] leading-none">
            Welcome,
            <br />
            {user.name}
          </div>
          <Image
            src={user.image}
            width={200}
            height={200}
            alt="profile image"
            className="rounded-full p-1 bg-color-primary hover:shadow-md shadow-color-dark/30"
          />
        </div>
        <div className="absolute inset-x-0">
          <div className="container flex gap-4 py-6">
            <Link
              href={"/users/dashboard/collection"}
              className="py-2 px-3 rounded-lg shadow-xl bg-color-accent"
            >
              My Collection
            </Link>
            <Link
              href={"/users/dashboard/comments"}
              className="py-2 px-3 rounded-lg shadow-xl bg-color-accent"
            >
              My Comments
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
