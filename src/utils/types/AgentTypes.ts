export interface AgentsTypes {
  characters: {
    data: {
      uuid: string;
      displayName: string;
      description: string;
      displayIcon: string;
      role: {
        displayName: string;
      };
      isPlayableCharacter: boolean;
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
