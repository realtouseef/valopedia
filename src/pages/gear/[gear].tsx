import { LiftedButton } from "@styles/globalStyles";
import SEO from "@utils/SEO";
import { IGear } from "@utils/types/GearsTypes";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const gear: React.FunctionComponent<IGear> = ({ gear }) => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO
        title={gear.displayName}
        description={gear.description}
        canonical={asPath}
        OGimageurl={gear.displayIcon}
        featuredImage={true}
      />

      <Link href="/gears">
        <LiftedButton fs={16}>Back to Gears Page</LiftedButton>
      </Link>

      <main>
        <StyledImage
          src={gear.displayIcon}
          alt={gear.displayName}
          width={200}
          height={200}
        />
        <h3>
          <strong>{gear.displayName}</strong>
        </h3>
        <p>{gear.description}</p>
      </main>
    </>
  );
};

export default gear;

type IPaths = { uuid: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_GEARS as string);
  const data = await res.json();

  const paths = data.data.map(({ uuid }: IPaths) => {
    return { params: { gear: uuid } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.gear;
  const res = await fetch(`${process.env.NEXT_PUBLIC_GEARS}/${id}`);
  const { data } = await res.json();

  return {
    props: {
      gear: data,
    },
  };
};

const StyledImage = styled(Image)`
  background-color: #2b2b2b;
`;
