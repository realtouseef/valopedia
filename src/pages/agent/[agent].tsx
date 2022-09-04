import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import SEO from "@components/SEO";
import Link from "next/link";

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
      <Link href="/">Go back to homepage</Link>
      <br />
      <Image src={fullPortrait} width={700} height={700} />
      <p>{displayName}</p>
      <p>{description}</p>
      <div>
        <Image
          src={role.displayIcon}
          alt={role.displayName}
          width={100}
          height={100}
        />
        <p>{role.displayName}</p>
        <p>{role.description}</p>
      </div>
      <div>
        {abilities.map((ability) => {
          return (
            <div key={ability.slot}>
              <p>{ability.slot}</p>
              <Image
                src={ability.displayIcon}
                alt={ability.displayName}
                width={100}
                height={100}
              />
              <p>{ability.displayName}</p>
              <p>{ability.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Agent;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_AGENTS as string);
  const data = await res.json();
  const paths = data.data.map((i) => {
    return { params: { agent: i.uuid } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.agent;
  const res = await fetch(`${process.env.NEXT_PUBLIC_AGENTS}/${id}` as string);
  const data = await res.json();

  return {
    props: {
      agent: data,
    },
  };
};
