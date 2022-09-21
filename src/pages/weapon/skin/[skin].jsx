const skin = ({ skin }) => {
  console.log(skin);
  return <div>weapon-skin</div>;
};

export default skin;

// make a req to weapon skin
// if weapon_skin_uuid === which weapon user has clicked
// show every skin for that weapon
// cant create /weapon/skins to display every skn
// it prints each and every skin that is present for
// every weapon
// returns 1.15MB data

// * TODO
// /weapon/skin/uuid to print skins of a single weapon.

// export const getStaticPaths = async () => {
//   const res = await fetch(process.env.NEXT_PUBLIC_WEAPONS_SKINS);
//   const data = await res.json();
//   const paths = data.data.map(({ uuid }) => {
//     return { params: { skin: uuid } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const id = params.skin;
//   const res = await fetch(`${process.env.NEXT_PUBLIC_WEAPON_SKINS}/${id}`);
//   const data = await res.json();

//   return {
//     props: { skin: data },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WEAPON_SKINS);
  const data = await res.json();

  return {
    props: { skin: data },
  };
};
