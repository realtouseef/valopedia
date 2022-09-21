import EveryAgent from "@components/EveryAgent";

const Agents = ({ characters }) => {
  return <EveryAgent characters={characters} />;
};

export default Agents;

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_AGENTS);
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
  };
};
