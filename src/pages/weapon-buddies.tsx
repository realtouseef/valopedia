import EveryWeaponBuddy from "@components/EveryWeaponBuddy";
import { WeaponBuddiesType } from "@utils/types/WeaponBuddyType";
import { GetStaticProps } from "next";

const Buddies: React.FunctionComponent<WeaponBuddiesType> = ({ buddies }) => {
  console.log(buddies);
  return (
    <>
      <EveryWeaponBuddy buddies={buddies} />
    </>
  );
};

export default Buddies;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WEAPON_BUDDIES as string);
  const { data } = await res.json();

  return {
    props: {
      buddies: data,
    },
  };
};
