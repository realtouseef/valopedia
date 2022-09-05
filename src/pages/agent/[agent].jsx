import Image from "next/image";
import SEO from "@components/SEO";

const Agent = ({ agent }) => {
  const {
    displayName,
    description,
    developerName,
    fullPortrait,
    abilities,
    role,
  } = agent.data;
  return (
    <>
      <SEO
        displayName={displayName}
        description={description}
        developerName={developerName}
        fullPortrait={fullPortrait}
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
            {abilities.map((ability) => {
              return (
                <div className="ability_wrapper" key={ability.slot}>
                  <p className="agent_abililty_slot">
                    <p className="ability_span"></p>
                    {ability.slot}
                  </p>

                  <Image
                    src={ability.displayIcon}
                    alt={ability.displayName}
                    width={50}
                    height={50}
                    className="agent_abililty_icons"
                  />

                  <p className="agent_abililty_name">{ability.displayName}</p>

                  <p className="agent_abililty_description">
                    {ability.description}
                  </p>
                </div>
              );
            })}
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
