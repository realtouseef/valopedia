const map = ({ singleMap }) => {
  const { displayName, listViewIcon } = singleMap;
  return (
    <>
      <main>
        <img src={listViewIcon} alt={displayName} />
        <h1>{displayName}</h1>
      </main>
    </>
  );
};

export default map;

export const getStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_MAPS);
  const data = await res.json();

  const paths = data.data.map((m) => {
    return { params: { map: m.uuid } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const mapId = params.map;
  const res = await fetch(`${process.env.NEXT_PUBLIC_MAPS}/${mapId}`);
  const data = await res.json();

  return {
    props: {
      singleMap: data.data,
    },
  };
};
