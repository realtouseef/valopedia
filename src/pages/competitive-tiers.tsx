import EveryCompetitiveTier from "@components/EveryCompetitiveTier";
import { CompetitiveTiersTypes } from "@utils/types/CompetitiveTierTypes";
import { GetStaticProps } from "next";

const Competitive: React.FunctionComponent<CompetitiveTiersTypes> = ({
  competitiveTier,
}) => {
  return (
    <div>
      <EveryCompetitiveTier competitiveTier={competitiveTier} />
    </div>
  );
};

export default Competitive;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_COMPETITIVE_TIER as string);
  const data = await res.json();

  return {
    props: {
      competitiveTier: data.data,
    },
  };
};
