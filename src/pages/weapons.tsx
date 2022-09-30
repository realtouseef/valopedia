import EveryWeapon from "@components/EveryWeapon";
import { WeaponsTypes } from "@utils/types/WeaponTypes";

const Weapons: React.FunctionComponent<WeaponsTypes> = ({ weaponsData }) => {
  return <EveryWeapon weaponsData={weaponsData} />;
};

export default Weapons;

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WEAPONS as string);
  const data = await res.json();

  return {
    props: {
      weaponsData: data.data,
    },
  };
};
