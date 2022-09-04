export interface AgentsTypes {
  data: {
    uuid?: string;
    displayName: string;
    description: string;
    developerName?: string;
    characterTags?: string[];
    displayIcon: string;
    fullPortrait?: string;
    background: string;
    backgroundGradientColors: string[];
    isPlayableCharacter: boolean;
    role: AgentsRoleProps;
    abilities: AgentsAbilityProps[];
  }[];
}

export type AgentsRoleProps = {
  uuid?: number;
  displayName: string;
  description?: string;
  displayIcons?: string;
};

export type AgentsAbilityProps = {
  slot: string | number;
  displayName: string;
  description: string;
  displayIcon: string;
};