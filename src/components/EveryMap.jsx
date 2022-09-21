import Link from "next/link";
import Image from "next/image";
import SEO from "@utils/SEO";
import {
  InsideWrapper,
  LiftedButton,
  OuterWrapper,
} from "@styles/globalStyles";
import styled from "styled-components";

const EveryMap = ({ maps }) => {
  return (
    <>
      <SEO
        title="Every Map"
        description="Every Map that is available on Valorant"
        canonical={`maps`}
        featuredImage={false}
      />
      <Link href="/">
        <LiftedButton fs={16}>Back to Home Page</LiftedButton>
      </Link>
      <OuterWrapper mdRepeat="2" mdWidth="1fr" lgRepeat="3" lgWidth="1fr">
        {maps.map(({ displayName, uuid, splash }) => {
          return (
            <Link href={`map/${uuid}`} key={uuid}>
              <InsideWrapper>
                <StyledImage
                  src={splash}
                  alt={displayName}
                  width="200"
                  height="200"
                  objectFit="cover"
                />
                <DisplayNameMap>{displayName}</DisplayNameMap>
              </InsideWrapper>
            </Link>
          );
        })}
      </OuterWrapper>
    </>
  );
};

export default EveryMap;

const StyledImage = styled(Image)`
  border-radius: 20px;
`;

const DisplayNameMap = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;
