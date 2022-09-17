import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Agents = ({ characters }) => {
  return (
    <>
      <AgentOutterWrapper>
        {characters.data &&
          characters.data?.map(
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
                  <AgentInsideWrapper>
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
                  </AgentInsideWrapper>
                </Link>
              );
            }
          )}
      </AgentOutterWrapper>
    </>
  );
};

export default Agents;

const AgentOutterWrapper = styled.div`
  max-width: 28rem;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(1fr, 2);
  gap: 1.25rem;

  @media (min-width: 1024px) {
    max-width: 64rem;
    grid-template-colums: repeat(1fr, 2);
  }

  @media (min-width: 1280px) {
    grid-template-colums: repeat(1fr, 3);
  }
`;

const AgentInsideWrapper = styled.a`
  width: max-content;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: rgb(243 244 246);
    border-radius: 1.5rem;
  }
`;

const AgentTextWrapper = styled.div`
  max-width: 36rem;
`;

const AgentImage = styled(Image)`
  border-radius: 100%;
`;

const AgentName = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0;
`;

const AgentDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
  color: rgb(55 65 81);
`;

const AgentRole = styled.span`
  background-color: rgb(240 171 252);
  padding: 0.5px 8px;
  border-radius: 0.5rem;
  font-size: 12px;
  color: white;
`;
