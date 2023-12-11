import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const UserSignInButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2">
      {user ? (
        <Link href='/user/dashboard'>
          <Image
            src={user.image}
            width={40}
            height={40}
            alt="profile-image"
            className="rounded-full h-10 p-1 bg-color-primary hover:shadow-md shadow-color-dark/30"
          />
        </Link>
      ) : null}
      <Link
        href={actionUrl}
        className="flex items-center p-2 h-10 bg-color-primary rounded-lg text-[80%] hover:shadow-md shadow-color-dark/30"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserSignInButton;
