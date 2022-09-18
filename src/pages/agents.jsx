import EveryAgent from "@components/EveryAgent";

const agents = ({ characters }) => {
  return <EveryAgent characters={characters} />;
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
