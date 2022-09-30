import EveryAgent from "@components/EveryAgent";
import { AgentsTypes } from "@utils/types/AgentTypes";

const Agents = ({ characters }: AgentsTypes) => {
  return <EveryAgent characters={characters} />;
};

export default Agents;

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AGENTS}?isPlayableCharacter=true` as string
  );
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
  };
};
