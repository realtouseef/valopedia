import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import {
  OuterWrapper,
  InsideWrapper,
  LiftedButton,
} from "@styles/globalStyles";
import SEO from "@utils/SEO";
import { AgentsTypes } from "@utils/types";

const EveryAgent: React.FunctionComponent<AgentsTypes> = ({ characters }) => {
  return (
    <>
      <SEO
        title="Every Agent"
        description="Every Agent that is available on Valorant alongside skins"
        canonical={`agents`}
        featuredImage={false}
      />

      <Link href="/">
        <LiftedButton fs={16}>Back to Home Page</LiftedButton>
      </Link>

      <OuterWrapper mdRepeat={2} mdWidth={1} lgRepeat={3} lgWidth={1}>
        {characters.data.map(
          ({
            uuid,
            displayName,
            description,
            displayIcon,
            role,
            isPlayableCharacter,
          }) => {
            return (
              <Link href={`agent/${uuid}`} key={uuid}>
                <InsideWrapper>
                  {isPlayableCharacter && (
                    <>
                      <AgentImage
                        src={displayIcon}
                        alt={displayName}
                        width="100"
                        height="100"
                      />
                      <AgentTextWrapper>
                        <AgentName>{displayName}</AgentName>
                        <AgentDescription>{description}</AgentDescription>
                        <AgentRole>{role?.displayName}</AgentRole>
                      </AgentTextWrapper>
                    </>
                  )}
                </InsideWrapper>
              </Link>
            );
          }
        )}
      </OuterWrapper>
    </>
  );
};

export default EveryAgent;

const AgentTextWrapper = styled.div`
  max-width: 36rem;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const AgentImage = styled(Image)`
  border-radius: 100%;
`;

const AgentName = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 10px 0 0 0;
`;

const AgentDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
  padding: 10px 0;
  color: rgb(55 65 81);
`;

const AgentRole = styled.span`
  background-color: rgb(240 171 252);
  padding: 0.5px 8px;
  border-radius: 0.5rem;
  font-size: 14px;
  letter-spacing: 1px;
  color: white;
`;
