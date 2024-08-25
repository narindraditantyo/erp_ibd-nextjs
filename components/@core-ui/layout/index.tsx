import { ScrollArea } from "@shadcn-ui/scroll-area";
import { Card } from "@shadcn-ui/card";
import { TooltipProvider } from "@shadcn-ui/tooltip";
import { cn } from "@/lib/utils";
import { ReactElement, useState } from "react";
import {
  NavCollapse,
  NavItems,
  NavLogo,
  NavSheet,
  UserDropdown,
} from "./parts";
import { navigation } from "./constants/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/@shadcn-ui/breadcrumb";
import { Home } from "lucide-react";

interface NavCollapseProps {
  children: ReactElement;
}

const AppLayout = ({ children }: NavCollapseProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState([
    "Master",
    "Category",
  ]);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="h-dvh flex">
        <div
          className={cn(
            "hidden md:flex flex-col justify-between bg-card shadow-lg transition-all duration-300 ease-in-out",
            isCollapsed ? "w-[50px]" : "w-64"
          )}
        >
          <NavLogo {...{ isCollapsed }} />
          <ScrollArea className="h-full max-h-full">
            <NavItems
              {...{ isCollapsed, setSelectedNavItem }}
              links={navigation}
            />
          </ScrollArea>
          <NavCollapse {...{ isCollapsed, setIsCollapsed }} />
        </div>
        <ScrollArea className="flex flex-col w-full px-4">
          <div className="flex justify-between md:justify-end items-center rounded-lg mt-4 px-4 py-2 h-[52px] bg-card shadow-lg">
            <NavSheet />
            <UserDropdown />
          </div>
          <Breadcrumb className="my-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              {selectedNavItem?.map((item, index) => (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem key={`${item}-${index}`}>
                    <BreadcrumbPage
                      className={cn(
                        index !== selectedNavItem.length - 1 &&
                          "text-muted-foreground"
                      )}
                    >
                      {item}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <div>{children}</div>
        </ScrollArea>
      </div>
    </TooltipProvider>
  );
};

export default AppLayout;
