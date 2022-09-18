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
        <LiftedButton>Back to Weapons Page</LiftedButton>
      </Link>
      <main>
        <ImageWrapper>
          <Image src={displayIcon} alt={displayName} layout="fill" />
        </ImageWrapper>
        <h1>{displayName}</h1>
        <div>
          {weaponStats && (
            <>
              <div>
                <span>Reload Time in Seconds</span>
                <p>{weaponStats?.reloadTimeSeconds}</p>
              </div>
              <div>
                <span>Magazine Size:</span>
                <p>{weaponStats?.magazineSize}</p>
              </div>
              <div>
                <span>Fire Rate:</span>
                <p>{weaponStats?.fireRate}</p>
              </div>
              <div>
                <span>First Bullet Accuracy:</span>
                <p>{weaponStats?.firstBulletAccuracy}</p>
              </div>
              <div>
                <span>Run Speed Multiplier:</span>
                <p>{weaponStats?.runSpeedMultiplier}</p>
              </div>
            </>
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 17rem;
`;

const BackButton = styled.a``;
