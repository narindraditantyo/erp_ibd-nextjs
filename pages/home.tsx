import { NextPageWithLayout } from "./_app";
import AppLayout from "@/components/@core-ui/layout";

const HomePage: NextPageWithLayout = () => {
  return <></>;
};

HomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default HomePage;
