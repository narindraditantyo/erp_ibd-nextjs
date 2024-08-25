import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@shadcn-ui/sheet";
import { AlignJustify } from "lucide-react";
import NavLogo from "./NavLogo";
import { ScrollArea } from "@shadcn-ui/scroll-area";
import NavItems from "./NavItems";
import { navigation } from "@core-ui/layout/constants/navigation";

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="md:hidden text-muted-foreground" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-card">
        <NavLogo type="full" />
        <ScrollArea className="h-full max-h-full">
          <NavItems links={navigation} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
