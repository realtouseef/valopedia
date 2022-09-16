import Agents from "@components/EveryAgent";

const agents = ({ characters }) => {
  return <Agents characters={characters} />;
};

export default agents;

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_AGENTS);
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
  };
};
