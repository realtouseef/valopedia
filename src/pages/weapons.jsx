import EveryWeapon from "@components/EveryWeapon";

const Weapons = ({ weaponsData }) => {
  return <EveryWeapon weaponsData={weaponsData} />;
};

export default Weapons;

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WEAPONS);
  const data = await res.json();

  return {
    props: {
      weaponsData: data.data,
    },
  };
};
