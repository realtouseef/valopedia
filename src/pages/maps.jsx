import EveryMap from "@components/EveryMap";

const Maps = ({ maps }) => {
  return (
    <>
      <EveryMap maps={maps} />
    </>
  );
};

export default Maps;

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_MAPS);
  const data = await res.json();

  return {
    props: {
      maps: data.data,
    },
  };
};
