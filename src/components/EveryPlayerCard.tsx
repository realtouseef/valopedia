import { LiftedButton, OuterWrapper } from "@styles/globalStyles";
import SEO from "@utils/SEO";
import { IPlayerCards } from "@utils/types/PlayerCardsTypes";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const EveryPlayerCard: React.FunctionComponent<IPlayerCards> = ({
  playerCards,
}) => {
  return (
    <>
      <SEO
        title="Every Player Card"
        description="Every Player Card that is available on Valorant"
        canonical={`/player-cards`}
        featuredImage={false}
      />

      <Link href="/">
        <LiftedButton fs={16}>Back to Home Page</LiftedButton>
      </Link>

      <h4>{playerCards.data.length} Player Cards Available Right now</h4>
      <OuterWrapper
        smRepeat={2}
        mdRepeat={4}
        mdWidth={1}
        lgRepeat={5}
        lgWidth={1}
      >
        {playerCards.data.map(({ uuid, displayIcon, displayName }) => {
          return (
            <InsideWrapperPlayer key={uuid}>
              <StyledImage
                src={displayIcon}
                alt={displayName}
                width={100}
                height={100}
              />
              <strong>{displayName}</strong>
            </InsideWrapperPlayer>
          );
        })}
      </OuterWrapper>
    </>
  );
};

export default EveryPlayerCard;

const InsideWrapperPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  padding: 0.5rem 0.75rem;
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

const StyledImage = styled(Image)`
  border-radius: 100%;
  padding-bottom: 10px;
`;
