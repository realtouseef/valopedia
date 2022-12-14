import Image from "next/image";
import Link from "next/link";
import { LiftedButton } from "@styles/globalStyles";
import SEO from "@utils/SEO";
import { useRouter } from "next/router";
import { siteMetaData } from "@utils/siteMetaData";
import {
  WeaponsStatsWrapper,
  WeaponStatsCard,
  StatsCardSpan,
  StatsCardPara,
} from "@pages/weapon/[weapon]";
import styled from "styled-components";
import { SingleMapTypes } from "@utils/types/MapTypes";
import { GetStaticPaths, GetStaticProps } from "next";

const Map: React.FunctionComponent<SingleMapTypes> = ({ singleMap }) => {
  const { siteDescription } = siteMetaData;
  const { asPath } = useRouter();

  return (
    <>
      <SEO
        title={`${singleMap?.displayName} Map`}
        description={siteDescription}
        canonical={asPath}
        OGimageurl={singleMap?.listViewIcon}
        featuredImage={true}
      />
      <Link href="/maps">
        <LiftedButton fs={16}>Back to Maps Page</LiftedButton>
      </Link>

      <main>
        <Image
          src={singleMap?.listViewIcon}
          alt={singleMap?.displayName}
          width={1024}
          height={200}
          objectFit="cover"
        />

        <h1>{singleMap?.displayName}</h1>
        <div>
          {singleMap?.displayIcon ? (
            <Image
              src={singleMap?.displayIcon}
              alt={singleMap?.displayName}
              width={300}
              height={300}
              objectFit="contain"
            />
          ) : (
            " "
          )}
        </div>
        <div>
          {singleMap?.callouts ? (
            singleMap?.callouts.map(
              ({ regionName, superRegionName, location }) => {
                const uuid = Math.round(Math.random() * location.x) + 1;
                return (
                  <WeaponsStatsWrapper
                    smrepeat={2}
                    smcols={1}
                    mdrepeat={2}
                    mdcols={1}
                    lgrepeat={4}
                    lgcols={1}
                    key={uuid}
                  >
                    <WeaponStatsCard>
                      <StatsCardSpan spanfs={12}>
                        Region Name:{" "}
                        <StatsCardPara parafs={20}>{regionName}</StatsCardPara>
                      </StatsCardSpan>
                    </WeaponStatsCard>
                    <WeaponStatsCard>
                      <StatsCardSpan spanfs={12}>
                        Super Region Name:{" "}
                        <StatsCardPara parafs={20}>
                          {superRegionName}
                        </StatsCardPara>
                      </StatsCardSpan>
                    </WeaponStatsCard>

                    <WeaponStatsCard>
                      <StatsCardSpan spanfs={12}>
                        Situated (x-axis):{" "}
                        <StatsCardPara parafs={20}>{location.x}</StatsCardPara>
                      </StatsCardSpan>
                    </WeaponStatsCard>
                    <WeaponStatsCard>
                      <StatsCardSpan spanfs={12}>
                        Situated (y-axis):{" "}
                        <StatsCardPara parafs={20}>{location.y}</StatsCardPara>
                      </StatsCardSpan>
                    </WeaponStatsCard>
                  </WeaponsStatsWrapper>
                );
              }
            )
          ) : (
            <NoData>
              No data is apparently available for{" "}
              <strong>{singleMap?.displayName}</strong>
            </NoData>
          )}
        </div>
      </main>
    </>
  );
};

export default Map;

type PathsType = { uuid: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_MAPS as string);
  const data = await res.json();

  const paths = data.data.map(({ uuid }: PathsType) => {
    return { params: { map: uuid } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mapId = params?.map;
  const res = await fetch(`${process.env.NEXT_PUBLIC_MAPS}/${mapId}`);
  const data = await res.json();

  return {
    props: {
      singleMap: data?.data,
    },
  };
};

const NoData = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-style: italic;
`;
