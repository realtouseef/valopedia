import { GetStaticPaths, GetStaticProps } from "next";

const Agent = ({ agent }) => {
  console.log(agent);
  return (
    <>
      <p>{agent.displayName}</p>
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
  const uuid = params.agent;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AGENTS}/${uuid}` as string
  );
  const data = await res.json();

  return {
    props: {
      agent: data,
    },
  };
};
