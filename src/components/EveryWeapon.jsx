import Link from "next/link";
import { OuterWrapper, InsideWrapper } from "@styles/globalStyles";

const EveryWeapon = ({ weaponsData }) => {
  return (
    <>
      <OuterWrapper>
        {weaponsData.map(({ uuid, displayName, displayIcon }) => {
          return (
            <Link href={`/weapons/${uuid}`} key={uuid}>
              <InsideWrapper>
                <img src={displayIcon} alt={displayName} />
                <p>{displayName}</p>
              </InsideWrapper>
            </Link>
          );
        })}
      </OuterWrapper>
    </>
  );
};

export default EveryWeapon;
