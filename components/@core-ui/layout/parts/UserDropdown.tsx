import { Avatar, AvatarFallback, AvatarImage } from "@shadcn-ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@shadcn-ui/dropdown-menu";
import Link from "next/link";

const UserDropdown = () => {
  const userData = {
    name: "John Doe",
    department: "Corporate Information Technology",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center cursor-pointer space-x-2">
          <div className="hidden md:flex flex-col space-y-0.5">
            <p className="text-sm text-right font-medium leading-none">
              {userData.name}
            </p>
            <p className="text-xs text-right leading-none text-muted-foreground">
              {userData.department}
            </p>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="flex md:hidden font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userData.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userData.department}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="flex md:hidden" />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/auth">Log out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
