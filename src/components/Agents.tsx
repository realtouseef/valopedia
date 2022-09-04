import type { AgentsTypes } from "@utils/types";
import Image from "next/image";
import Link from "next/link";

const Agents: React.FunctionComponent<AgentsTypes> = ({ characters }) => {
  return (
    <>
      <main className="agent">
        {characters.data?.map(
          ({
            uuid,
            displayName,
            description,
            displayIcon,
            role,
            isPlayableCharacter,
          }) => {
            return (
              <Link href={`agent/${uuid}`} key={uuid}>
                <a className="agent_wrapper">
                  <Image
                    src={displayIcon}
                    alt={displayName}
                    width="100"
                    height="100"
                    className="agent_image"
                  />
                  <div className="agent_texts">
                    <p className="agent_name">{displayName}</p>
                    <p className="agent_description">{description}</p>
                    <span className="agent_role">{role?.displayName}</span>
                  </div>
                </a>
              </Link>
            );
          }
        )}
      </main>
    </>
  );
};

export default Agents;
