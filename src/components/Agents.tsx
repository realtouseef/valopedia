import type { AgentsTypes } from "@utils/types";
import Image from "next/image";

const Agents: React.FunctionComponent<AgentsTypes> = ({ characters }) => {
  return (
    <>
      <main>
        {characters.data?.map(
          ({ uuid, displayName, description, displayIcon, role }) => {
            return (
              <div key={uuid}>
                <Image
                  src={displayIcon}
                  alt={displayName}
                  width="100"
                  height="100"
                />
                <p>{displayName}</p>
                <p>{description}</p>
                <span>{role?.displayName}</span>
              </div>
            );
          }
        )}
      </main>
    </>
  );
};

export default Agents;
