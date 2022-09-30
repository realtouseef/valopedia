import EveryPlayerCard from "@components/EveryPlayerCard";
import { IPlayerCards } from "@utils/types/PlayerCardsTypes";
import { GetStaticProps } from "next";

const PlayerCards: React.FunctionComponent<IPlayerCards> = ({
  playerCards,
}) => {
  return (
    <>
      <EveryPlayerCard playerCards={playerCards} />
    </>
  );
};

export default PlayerCards;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_PLAYER_CARDS as string);
  const data = await res.json();

  return {
    props: {
      playerCards: data,
    },
  };
};
