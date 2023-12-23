import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import { notFound } from "next/navigation";

const Page = async () => {
  const user = await authUserSession();

  return (
    <>
      <div>Dashboard</div>
      <div>Welcome {user.name}</div>
      <Image
        src={user.image}
        width={200}
        height={200}
        alt="profile image"
        className="rounded-full p-1 bg-color-primary hover:shadow-md shadow-color-dark/30"
      />
    </>
  );
};

export default Page;
