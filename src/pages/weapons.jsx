import EveryWeapon from "@components/EveryWeapon";

const weapons = ({ weaponsData }) => {
  return <EveryWeapon weaponsData={weaponsData} />;
};

export default weapons;

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WEAPONS);
  const data = await res.json();

  return {
    props: {
      weaponsData: data.data,
    },
  };
};
