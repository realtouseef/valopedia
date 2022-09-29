import SEO from "@utils/SEO";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { LiftedButton } from "@styles/globalStyles";

const Weapon = ({ weapon }) => {
  const { displayName, displayIcon, weaponStats, shopData } = weapon?.data;
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title={displayName}
        description={`${displayName}, it is from the ${
          shopData?.categoryText ?? "Melee"
        } category in Valorant`}
        canonical={asPath}
        OGimageurl={displayIcon}
        featuredImage={true}
      />
      <Link href="/weapons">
        <LiftedButton fs={16}>Back to Weapons Page</LiftedButton>
      </Link>
      <main>
        <ImageWrapper>
          <Image src={displayIcon} alt={displayName} layout="fill" />
        </ImageWrapper>
        <h1>{displayName}</h1>
        <div>
          {weaponStats && (
            <WeaponsStatsWrapper
              smrepeat={1}
              smcols={1}
              mdrepeat={2}
              mdcols={1}
              lgrepeat={3}
              lgcols={1}
            >
              <WeaponStatsCard>
                <StatsCardSpan spanfs={16}>Reload Time</StatsCardSpan>
                <StatsCardPara parafs={50}>
                  {`${weaponStats?.reloadTimeSeconds}s`}
                </StatsCardPara>
              </WeaponStatsCard>

              <WeaponStatsCard>
                <StatsCardSpan spanfs={16}>Magazine Size:</StatsCardSpan>
                <StatsCardPara parafs={50}>
                  {weaponStats?.magazineSize}
                </StatsCardPara>
              </WeaponStatsCard>

              <WeaponStatsCard>
                <StatsCardSpan spanfs={16}>Fire Rate:</StatsCardSpan>
                <StatsCardPara parafs={50}>
                  {weaponStats?.fireRate}
                </StatsCardPara>
              </WeaponStatsCard>

              <WeaponStatsCard>
                <StatsCardSpan spanfs={16}>
                  First Bullet Accuracy:
                </StatsCardSpan>
                <StatsCardPara parafs={50}>
                  {weaponStats?.firstBulletAccuracy}
                </StatsCardPara>
              </WeaponStatsCard>

              <WeaponStatsCard>
                <StatsCardSpan spanfs={16}>Run Speed Multiplier:</StatsCardSpan>
                <StatsCardPara parafs={50}>
                  {weaponStats?.runSpeedMultiplier}
                </StatsCardPara>
              </WeaponStatsCard>
            </WeaponsStatsWrapper>
          )}
        </div>
      </main>
    </>
  );
};

export default Weapon;

export const getStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WEAPONS);
  const data = await res.json();
  const paths = data.data.map((w) => {
    return { params: { weapon: w.uuid } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.weapon;
  const res = await fetch(`${process.env.NEXT_PUBLIC_WEAPONS}/${id}`);
  const data = await res.json();

  return {
    props: {
      weapon: data,
    },
  };
};

type WeaponsStatsWrapperType = {
  smrepeat: number;
  smcols: number;
  mdrepeat: number;
  mdcols: number;
  lgrepeat: number;
  lgcols: number;
};

type StatsCardSpanType = {
  spanfs: number;
};

type StatsCardParaType = {
  parafs: number;
};

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 17rem;
`;

export const WeaponsStatsWrapper = styled.div<WeaponsStatsWrapperType>`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.smrepeat} ,${props.smcols}fr)`};
  gap: 10px;
  place-items: center;
  place-content: center;
  margin: 20px 0;
  padding: 0 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: ${(props) =>
      `repeat(${props.mdrepeat} ,${props.mdcols}fr)`};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${(props) =>
      `repeat(${props.lgrepeat} ,${props.lgcols}fr)`};
  }
`;

export const WeaponStatsCard = styled.div`
  background-color: #f3f3f3;
  height: 120px;
  width: 230px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export const StatsCardSpan = styled.span<StatsCardSpanType>`
  font-size: ${(props) => `${props.spanfs}px`};
  color: #252525;
  font-weight: 600;
`;

export const StatsCardPara = styled.p<StatsCardParaType>`
  font-size: ${(props) => `${props.parafs}px`};
  color: black;
  font-weight: bold;
  margin-top: 5px;
`;

const StatsLink = styled(Link)`
  font-size: 25px;
  color: black;
`;
