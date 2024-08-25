import { Separator } from "@shadcn-ui/separator";
import { ArrowLeftToLine, ArrowRightFromLine } from "lucide-react";

interface NavCollapseProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const NavCollapse = ({ isCollapsed, setIsCollapsed }: NavCollapseProps) => {
  return (
    <div>
      <div className="px-2">
        <Separator />
      </div>
      <div
        className="flex justify-center items-center cursor-pointer h-[50px] w-full text-muted-foreground"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ArrowRightFromLine className="h-4 w-4" />
        ) : (
          <ArrowLeftToLine className="h-4 w-4" />
        )}
      </div>
    </div>
  );
};

export default NavCollapse;
