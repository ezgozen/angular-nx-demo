import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EnvironmentConfig, ENV_CONFIG } from './environment-config.interface';

@NgModule({
  imports: [CommonModule]
})
export class EnvironmentModule {
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: ENV_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
