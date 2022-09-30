import {
  InsideWrapper,
  LiftedButton,
  OuterWrapper,
} from "@styles/globalStyles";
import SEO from "@utils/SEO";
import { IGears } from "@utils/types/GearsTypes";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const EveryGear: React.FunctionComponent<IGears> = ({ gears }) => {
  return (
    <>
      <SEO
        title="Gears"
        description="Every Gear that is avaialbe on Valorant"
        featuredImage={false}
        canonical="/gears"
      />
      <Link href="/">
        <LiftedButton fs={16}>Back to Home Page</LiftedButton>
      </Link>
      <OuterWrapperGears>
        {gears.map(({ uuid, displayName, displayIcon }) => {
          return (
            <Link href={`/gear/${uuid}`} key={uuid}>
              <InsideWrapper>
                <StyledImage
                  src={displayIcon}
                  alt={displayName}
                  width={200}
                  height={200}
                />
                <p>
                  <strong>{displayName}</strong>
                </p>
              </InsideWrapper>
            </Link>
          );
        })}
      </OuterWrapperGears>
    </>
  );
};

export default EveryGear;

const OuterWrapperGears = styled.main`
  margin: 40px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  place-content: center;
  gap: 1.25rem;
`;

const StyledImage = styled(Image)`
  background-color: #353535;
  border-radius: 100%;
`;
