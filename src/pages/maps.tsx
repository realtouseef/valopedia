import EveryMap from "@components/EveryMap";
import { IMapsTypes } from "@utils/types/MapTypes";

const Maps: React.FunctionComponent<IMapsTypes> = ({ maps }) => {
  return (
    <>
      <EveryMap maps={maps} />
    </>
  );
};

export default Maps;

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_MAPS as string);
  const data = await res.json();

  return {
    props: {
      maps: data.data,
    },
  };
};
