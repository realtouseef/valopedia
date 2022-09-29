export interface WeaponsTypes {
  weaponsData: {
    uuid: string;
    displayName: string;
    displayIcon: string;
    shopData: { categoryText: string };
  }[];
}

export interface SingleWeaponType {
  weapon: {
    data: {
      displayName: string;
      displayIcon: string;
      weaponStats: {
        reloadTimeSeconds: number;
        magazineSize: number;
        fireRate: number;
        firstBulletAccuracy: number;
        runSpeedMultiplier: number;
      };
      shopData: { categoryText: string };
    };
  };
}
