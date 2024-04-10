import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { ModulesService } from '../../service/modules.service';
import { menuArray } from '../../shared/menuArray';
import { take } from 'rxjs';

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent implements OnInit {

  sideNavCollapsed = signal(false)
  isMenuItemClicked = false;

  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItems = menuArray;
  modules!: any[];

  profileSize = computed(() => this.sideNavCollapsed() ? '32' : '100')

  constructor(private modulesService: ModulesService) {}

  ngOnInit() {
    this.getModules();
  }

  toggleSubModules(module: any): void {
    module.showSubModules = !module.showSubModules;
    this.isMenuItemClicked = true;
  }

  getModules(): void {
    this.modulesService.getModules().pipe(take(1)).subscribe({
      next: (data: any) =>  {
          this.modules = data.body.map((module: any) => {
            return {
              ...module,
              subModulos: module.subModulos.map((subModule: any) => {
                return {
                  ...subModule,
                  icon: this.getIconForModule(subModule.Descricao),
                  route: this.getRouteForSubModule(subModule.Descricao)
                };
              })
            };
          });
      },
      error: (error) => {
          console.error('Erro ao carregar os módulos:', error);
      }
    });
  }

  getRouteForSubModule(moduleDescricao: string): string {
    const menuItem = menuArray.find(item => item.text === moduleDescricao);
    const route = menuItem && menuItem.link ? menuItem.link : '/';
    return route;
  }

  getIconForModule(moduleDescricao: string): string {
    const menuItem = menuArray.find(item => item.text === moduleDescricao);
    return menuItem && menuItem.icon ? menuItem.icon : 'description';
  }

}
