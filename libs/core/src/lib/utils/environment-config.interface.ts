import { InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
  environment: {
    production: boolean,
    isPremium: boolean;
  };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');
