import EveryGear from "@components/EveryGear";
import { IGears } from "@utils/types/GearsTypes";
import { GetStaticProps } from "next";

const Gears: React.FunctionComponent<IGears> = ({ gears }) => {
  return <EveryGear gears={gears} />;
};

export default Gears;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_GEARS as string);
  const { data } = await res.json();

  return {
    props: {
      gears: data,
    },
  };
};
