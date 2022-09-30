import Image from "next/image";
import SEO from "@utils/SEO";
import { siteMetaData } from "@utils/siteMetaData";
import { useRouter } from "next/router";
import styled from "styled-components";
import { LiftedButton } from "@styles/globalStyles";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { SingleAgentType } from "@utils/types/AgentTypes";

const Agent: React.FunctionComponent<SingleAgentType> = ({ agent }) => {
  const {
    displayName,
    description,
    fullPortrait,
    killfeedPortrait,
    abilities,
    role,
  } = agent?.data || {};

  const { siteUrl } = siteMetaData;
  const { asPath } = useRouter();

  return (
    <>
      <SEO
        title={displayName}
        description={description}
        canonical={`${siteUrl}${asPath}`}
        OGimageurl={killfeedPortrait}
        featuredImage={true}
      />

      <Link href="/agents">
        <LiftedButton fs={16}>Back to Agents Page</LiftedButton>
      </Link>

      {agent?.data ? (
        <AgentProfile>
          <AgentPortrait>
            <Image
              src={fullPortrait}
              alt={displayName}
              placeholder="blur"
              blurDataURL={fullPortrait}
              objectFit="cover"
              layout="fill"
              quality={100}
            />
          </AgentPortrait>
          <AgentTextWrapper>
            <AgentDisplayName>{displayName}</AgentDisplayName>
            <AgentDescription>{description}</AgentDescription>

            <AgentProfileRoles>
              <AgentRoleText>Role</AgentRoleText>
              <Image
                src={role?.displayIcon}
                alt={role?.displayName}
                width="30"
                height="30"
                className="agent_roles_icons"
              />

              <AgentRolesName>{role?.displayName}</AgentRolesName>

              <AgentRolesDescription>{role?.description}</AgentRolesDescription>
            </AgentProfileRoles>

            <ProfileAbility>
              {abilities?.map(
                ({ slot, displayIcon, displayName, description }) => {
                  return (
                    <AbilityWrapper key={slot}>
                      <AbilitySlot>
                        <AblilitySpan />
                        {slot}
                      </AbilitySlot>

                      <Image
                        src={displayIcon}
                        alt={displayName}
                        width={50}
                        height={50}
                        className="agent_abililty_icons"
                      />

                      <AbilityName>{displayName}</AbilityName>

                      <AbilityDescription>{description}</AbilityDescription>
                    </AbilityWrapper>
                  );
                }
              )}
            </ProfileAbility>
          </AgentTextWrapper>
        </AgentProfile>
      ) : (
        <p>Nothing found for this Agent</p>
      )}
    </>
  );
};

export default Agent;

type PathProps = { uuid: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_AGENTS as string);
  const data = await res.json();

  const paths = data.data.map(({ uuid }: PathProps) => {
    return { params: { agent: uuid } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.agent;
  const res = await fetch(`${process.env.NEXT_PUBLIC_AGENTS}/${id}`);
  const data = await res.json();

  return {
    props: {
      agent: data,
    },
  };
};

// styling

const AgentProfile = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    max-width: 80rem;
    padding: 0;
    flex-direction: row;
  }
`;

const AgentPortrait = styled.div`
  position: relative;
  width: 24rem;
  height: 450px;

  @media (min-width: 1024px) {
    width: 768px;
    height: 1024px;
  }
`;

const AgentTextWrapper = styled.div`
  max-width: 36rem;
`;

const AgentDisplayName = styled.p`
  margin-bottom: 1rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: black;
`;

const AgentDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(75 85 99);
`;

const AgentProfileRoles = styled.div`
  margin: 3.5rem 0;
`;

const AgentRoleText = styled.p`
  width: max-content;
  margin-bottom: 0.5rem;
  background-color: rgb(251 207 232);
  padding: 1px 0.75rem;
  border-radius: 1rem;
  font-weight: bold;
  color: rgb(236 72 153);
  font-size: 0.75rem;
  line-height: 1rem;
`;

const AgentRolesName = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: bold;
`;

const AgentRolesDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(75 85 99);
`;

const ProfileAbility = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(1fr, 2);
  }
`;

const AbilityWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const AbilitySlot = styled.p`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  background-color: rgb(216 180 254);
  padding: 1px 0.75rem;
  border-radius: 1rem;
`;

const AblilitySpan = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 6px;
  background-color: rgb(107 33 168);
  border-radius: 100%;
`;

const AbilityName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const AbilityDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(75 85 99);
`;
