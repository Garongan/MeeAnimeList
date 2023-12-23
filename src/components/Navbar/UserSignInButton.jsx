import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";
import AvatarMenu from "./AvatarMenu";

const UserSignInButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2">
      {user ? (
        <AvatarMenu profileImgSrc={user.image} actionUrl={actionUrl} actionLabel={actionLabel} />
      ) : (
        <Link
          href={actionUrl}
          className="flex items-center p-2 h-10 bg-color-primary rounded-lg text-[80%] hover:shadow-md shadow-color-dark/30"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default UserSignInButton;
