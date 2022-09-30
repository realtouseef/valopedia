import { LiftedButton } from "@styles/globalStyles";
import { CompetitiveTiersTypes } from "@utils/types/CompetitiveTierTypes";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const EveryCompetitiveTier: React.FunctionComponent<CompetitiveTiersTypes> = ({
  competitiveTier,
}) => {
  return (
    <>
      <Link href="/">
        <LiftedButton fs={16}>Back to Home Page</LiftedButton>
      </Link>
      <h3>{competitiveTier.length} Competitive Tiers shown</h3>
      <p>
        And each tier has{" "}
        {competitiveTier.map(({ tiers }) => {
          return <span>{tiers.length}, </span>;
        })}{" "}
        tiers/levels respectively
      </p>
      <OutterWrapperCompetitive>
        {competitiveTier.map(({ uuid, tiers }) => {
          return (
            <CompetitiveOuterWrapper key={uuid}>
              {tiers.map(({ smallIcon, tierName, tier }) => {
                return (
                  <InsideOuterWrapper key={tier}>
                    {smallIcon ? (
                      <Image
                        src={smallIcon}
                        alt={tierName}
                        width={100}
                        height={100}
                      />
                    ) : (
                      <small>No Icon available</small>
                    )}
                    <h3>{tierName}</h3>
                    <small>{tier}</small>
                  </InsideOuterWrapper>
                );
              })}
            </CompetitiveOuterWrapper>
          );
        })}
      </OutterWrapperCompetitive>
    </>
  );
};

export default EveryCompetitiveTier;

const CompetitiveOuterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const OutterWrapperCompetitive = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  place-content: center;

  @media (min-width: 768px) {
    margin: 40px auto;
    place-items: start;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1048px) {
    place-items: start;
    grid-template-columns: repeat(5, 1fr);
  }
`;

const InsideOuterWrapper = styled.div`
  margin: 10px 0;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
  border: 0.5px var(--border-color) solid;
  border-radius: 1.5rem;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 6px 6px var(--box-shadow-color);
    transform: translateX(-5px) translateY(-5px);
  }
`;
