import Image from "next/image";
import SEO from "@utils/SEO";
import { siteMetaData } from "@utils/siteMetaData";
import { useRouter } from "next/router";

const Agent = ({ agent }) => {
  const {
    displayName,
    description,
    fullPortrait,
    killfeedPortrait,
    abilities,
    role,
  } = agent.data;
  console.log(agent);

  const { siteUrl } = siteMetaData;
  const { asPath } = useRouter();

  return (
    <>
      <SEO
        title={displayName}
        description={description}
        canonical={`${siteUrl}${asPath}`}
        OGimageurl={killfeedPortrait}
      />

      <div className="agent_profile">
        <div className="agent_portrait">
          <Image
            src={fullPortrait}
            alt={displayName}
            placeholder="blur"
            blurDataURL={fullPortrait}
            objectFit="cover"
            layout="fill"
            quality={100}
          />
        </div>
        <div className="agent_profile_text">
          <p className="displayName">{displayName}</p>
          <p className="description">{description}</p>

          <div className="agent_profile_roles">
            <p className="role_text">Role</p>
            <Image
              src={role.displayIcon}
              alt={role.displayName}
              width="30"
              height="30"
              className="agent_roles_icons"
            />

            <p className="agent_roles_name">{role.displayName}</p>

            <p className="agent_roles_description">{role.description}</p>
          </div>

          <div className="agent_profile_ability">
            {abilities.map(
              ({ slot, displayIcon, displayName, description }) => {
                return (
                  <div className="ability_wrapper" key={slot}>
                    <p className="agent_abililty_slot">
                      <span className="ability_span"></span>
                      {slot}
                    </p>

                    <Image
                      src={displayIcon}
                      alt={displayName}
                      width={50}
                      height={50}
                      className="agent_abililty_icons"
                    />

                    <p className="agent_abililty_name">{displayName}</p>

                    <p className="agent_abililty_description">{description}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agent;

export const getStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_AGENTS);
  const data = await res.json();
  const paths = data.data.map((i) => {
    return { params: { agent: i.uuid } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.agent;
  const res = await fetch(`${process.env.NEXT_PUBLIC_AGENTS}/${id}`);
  const data = await res.json();

  return {
    props: {
      agent: data,
    },
  };
};
