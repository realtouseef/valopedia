import {
  InsideWrapper,
  LiftedButton,
  OuterWrapper,
} from "@styles/globalStyles";
import SEO from "@utils/SEO";
import { WeaponBuddiesType } from "@utils/types/WeaponBuddyType";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const EveryWeaponBuddy: React.FunctionComponent<WeaponBuddiesType> = ({
  buddies,
}) => {
  return (
    <>
      <SEO
        title="Weapon Buddies"
        description="Every Weapon Buddy that is available on Valorant"
        canonical="/weapon-buddies"
        featuredImage={false}
      />

      <Link href="/">
        <LiftedButton fs={16}>Back to Home Page</LiftedButton>
      </Link>
      <h2>{buddies.length} Available Weapon Buddies</h2>
      <OuterWrapper
        smRepeat={2}
        mdRepeat={2}
        mdWidth={1}
        lgRepeat={4}
        lgWidth={1}
      >
        {buddies.map(({ uuid, displayName, displayIcon }) => {
          return (
            <BuddyWrapper key={uuid}>
              <InsideWrapper>
                <Image
                  src={displayIcon}
                  alt={displayName}
                  width={100}
                  height={100}
                />
                <BuddyHeading>{displayName}</BuddyHeading>
              </InsideWrapper>
            </BuddyWrapper>
          );
        })}
      </OuterWrapper>
    </>
  );
};

export default EveryWeaponBuddy;

const BuddyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
`;

const BuddyHeading = styled.h3`
  margin-top: 10px;
  max-width: 200px;
`;
