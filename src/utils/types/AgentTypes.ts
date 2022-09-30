export interface AgentsTypes {
  characters: {
    data: {
      uuid: string;
      displayName: string;
      description: string;
      displayIcon: string;
      isPlayableCharater: boolean;
      role: {
        displayName: string;
      };
    }[];
  };
}

export interface SingleAgentType {
  agent: {
    data: {
      displayName: string;
      description: string;
      fullPortrait: string;
      killfeedPortrait: string;
      isPlayableCharacter: boolean;
      role: {
        displayName: string;
        displayIcon: string;
        description: string;
      };
      abilities: {
        displayName: string;
        displayIcon: string;
        description: string;
        slot: string;
      }[];
    };
  };
}
