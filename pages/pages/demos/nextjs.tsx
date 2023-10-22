import { NextjsDemoC } from "@/components/nextjs-demo-c";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function NextJsDemoPages(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <NextjsDemoC title={`Clerk Pages Router`} todos={[]} />;
}

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  return { props: {} };
};
