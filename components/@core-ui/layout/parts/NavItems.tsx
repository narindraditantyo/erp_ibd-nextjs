import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@shadcn-ui/tooltip";
import { buttonVariants } from "@shadcn-ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/router";

interface NavProps {
  isCollapsed?: boolean;
  links: {
    title: string;
    icon: LucideIcon;
    href: string;
  }[];
  setSelectedNavItem: (value: string[]) => void;
}

const NavItems = ({
  isCollapsed = false,
  links = [],
  setSelectedNavItem,
}: NavProps) => {
  const router = useRouter();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({
                      variant: router.asPath.startsWith(link.href)
                        ? "primary"
                        : "ghost",
                      size: "icon",
                    }),
                    "h-9 w-9",
                    router.asPath.startsWith(link.href) &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                  onClick={() => setSelectedNavItem([link.title])}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({
                  variant: router.asPath.startsWith(link.href)
                    ? "primary"
                    : "ghost",
                  size: "sm",
                }),
                router.asPath.startsWith(link.href) &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
              onClick={() => setSelectedNavItem([link.title])}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default NavItems;
