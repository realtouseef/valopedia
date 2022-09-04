import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

const Agent = ({ agent }) => {
  console.log(agent);
  return (
    <>
      <Head>
        <title>{agent.data.displayName}</title>
      </Head>
      hi
      <Image src={agent.data.fullPortrait} width={700} height={700} />
      <p>{agent.data.displayName}</p>
    </>
  );
};

export default Agent;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_AGENTS as string);
  const data = await res.json();
  const paths = data.data.map((i) => {
    return { params: { agent: i.uuid } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.agent;
  const res = await fetch(`${process.env.NEXT_PUBLIC_AGENTS}/${id}` as string);
  const data = await res.json();

  return {
    props: {
      agent: data,
    },
  };
};
