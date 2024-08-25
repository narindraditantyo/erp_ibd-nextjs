import Image from "next/image";
import iconLogo from "/public/logo/kalbe-farma-icon-logo.png";
import typoLogo from "/public/logo/kalbe-farma-typo-logo.png";
import fullLogo from "/public/logo/kalbe-farma-full-logo.png";
import { Separator } from "@shadcn-ui/separator";
import { cn } from "@/lib/utils";

interface NavLogoProps {
  type?: "split" | "full";
  isCollapsed?: boolean;
}

const NavLogo = ({ type = "split", isCollapsed = false }: NavLogoProps) => {
  return (
    <>
      <div
        className={cn(
          "h-[52px] my-4 flex justify-start",
          type === "split" && isCollapsed ? "mx-auto" : "mx-4"
        )}
      >
        <Image
          src={type === "split" ? iconLogo : fullLogo}
          alt={`kf-${type === "split" ? "icon" : "full"}-logo`}
          height={52}
        />
        {type === "split" && !isCollapsed && (
          <Image src={typoLogo} alt="kf-icon-logo" height={52} />
        )}
      </div>
      <div className="px-2">
        <Separator />
      </div>
    </>
  );
};

export default NavLogo;
