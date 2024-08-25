import { createClient } from "@/utils/supabase/server-props";
import type { GetServerSidePropsContext } from "next";

const IndexPage = () => {
  return <></>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createClient(ctx);

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userData && !userError)
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

export default IndexPage;
