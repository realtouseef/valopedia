export interface IGears {
  gears: {
    uuid: string;
    displayIcon: string;
    displayName: string;
    description: string;
  }[];
}

export interface IGear {
  gear: {
    displayIcon: string;
    displayName: string;
    description: string;
  };
}
