import Link from "next/link";

const EveryWeapon = ({ weaponsData }) => {
  console.log(weaponsData);
  return (
    <>
      <main>
        {weaponsData.map(({ uuid, displayName, displayIcon }) => {
          return (
            <Link href={`/weapons/${uuid}`} key={uuid}>
              <a>
                <img src={displayIcon} alt={displayName} />
                <p>{displayName}</p>
              </a>
            </Link>
          );
        })}
      </main>
    </>
  );
};

export default EveryWeapon;
