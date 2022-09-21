import Link from "next/link";
import Image from "next/image";
import {
  OuterWrapper,
  InsideWrapper,
  LiftedButton,
} from "@styles/globalStyles";
import styled from "styled-components";
import SEO from "@utils/SEO";

const EveryWeapon = ({ weaponsData }) => {
  return (
    <>
      <SEO
        title="Every Weapon"
        description="Every Weapon that is available on Valorant alongside skins"
        canonical={`weapons`}
        featuredImage={false}
      />

      <Link href="/">
        <LiftedButton fs={16}>Back to Home Page</LiftedButton>
      </Link>

      <OuterWrapper mdRepeat="1" mdWidth="1fr" lgRepeat="2" lgWidth="1fr">
        {weaponsData.map(({ uuid, displayName, displayIcon, shopData }) => {
          return (
            <Link href={`/weapon/${uuid}`} key={uuid}>
              <InsideWrapper>
                <ImageWrapper>
                  <Image
                    src={displayIcon}
                    alt={displayName}
                    layout="fill"
                    priority
                  />
                </ImageWrapper>
                <WeaponName>{displayName}</WeaponName>
                <WeaponCategoryName>
                  {shopData?.categoryText}
                </WeaponCategoryName>
              </InsideWrapper>
            </Link>
          );
        })}
      </OuterWrapper>
    </>
  );
};

export default EveryWeapon;

const ImageWrapper = styled.div`
  position: relative;
  /* width: 512px;
  height: 10rem; */
  width: 512px;
  height: 10rem;
`;

const WeaponName = styled.p`
  font-weight: bold;
  font-size: 1.12rem;
`;

const WeaponCategoryName = styled.p`
  font-size: 0.875rem;
  color: #2b2b2b;
  margin: 5px 0;
`;