import { File, Home, Notebook, ShoppingBasket, UsersRound, Wallet } from "lucide-react";

export const navigation = [
  {
    title: "Home",
    icon: Home,
    href: "/home",
  },
  {
    title: "Master Data",
    icon: File,
    childrens: [
      {
        title: "User",
        icon: UsersRound,
        href: "/master-data/user",
      },
      {
        title: "Inventory",
        icon: ShoppingBasket,
        href: "/master-data/inventory",
      },
      {
        title: "Tipe Transaksi",
        icon: Wallet,
        href: "/master-data/tipe-transaksi",
      },
      {
        title: "Chart of Account (CoA)",
        icon: Notebook,
        href: "/master-data/coa",
      },
    ],
  },
  {
    title: "Table",
    icon: File,
    href: "/table",
  },
];
