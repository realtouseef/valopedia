export interface MapsTypes {
  maps: {
    uuid: string;
    displayName: string;
    splash: string;
  }[];
}

export interface SingleMapTypes {
  singleMap: {
    displayName: string;
    listViewIcon: string;
    displayIcon: string;

    callouts: {
      regionName: string;
      superRegionName: string;
      location: { x: number; y: number };
    }[];
  };
}
