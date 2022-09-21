import SEO from "@utils/SEO";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { LiftedButton } from "@styles/globalStyles";

const Weapon = ({ weapon }) => {
  const { displayName, displayIcon, weaponStats, shopData } = weapon.data;
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
            <WeaponsStatsWrapper>
              <WeaponStatsCard>
                <StatsCardSpan>Reload Time</StatsCardSpan>
                <StatsCardPara>
                  {`${weaponStats?.reloadTimeSeconds}s`}
                </StatsCardPara>
              </WeaponStatsCard>

              <WeaponStatsCard>
                <StatsCardSpan>Magazine Size:</StatsCardSpan>
                <StatsCardPara>{weaponStats?.magazineSize}</StatsCardPara>
              </WeaponStatsCard>

              <WeaponStatsCard>
                <StatsCardSpan>Fire Rate:</StatsCardSpan>
                <StatsCardPara>{weaponStats?.fireRate}</StatsCardPara>
              </WeaponStatsCard>

              <WeaponStatsCard>
                <StatsCardSpan>First Bullet Accuracy:</StatsCardSpan>
                <StatsCardPara>
                  {weaponStats?.firstBulletAccuracy}
                </StatsCardPara>
              </WeaponStatsCard>

              <WeaponStatsCard>
                <StatsCardSpan>Run Speed Multiplier:</StatsCardSpan>
                <StatsCardPara>{weaponStats?.runSpeedMultiplier}</StatsCardPara>
              </WeaponStatsCard>
            </WeaponsStatsWrapper>
          )}

          <Link href="/weapon/skin">
            <LiftedButton fs={25}>
              {`Check out ${displayName}'s Skins`}
            </LiftedButton>
          </Link>
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 17rem;
`;

const WeaponsStatsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  place-items: center;
  place-content: center;
  margin: 20px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const WeaponStatsCard = styled.div`
  background-color: #f3f3f3;
  height: 120px;
  width: 250px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const StatsCardSpan = styled.span`
  font-size: 16px;
  color: #252525;
  font-weight: 600;
`;

const StatsCardPara = styled.p`
  font-size: 50px;
  color: black;
  font-weight: bold;
  margin-top: 5px;
`;

const StatsLink = styled(Link)`
  font-size: 25px;
  color: black;
`;
