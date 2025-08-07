import { UserButton } from "@clerk/nextjs";
import DesktopMenu from "./DesktopMenu";

export default function LoggedInUserNav() {
  return (
    <>
      <div className="hidden lg:flex gap-4">
        <DesktopMenu />
        <UserButton />
      </div>
    </>
  );
}
