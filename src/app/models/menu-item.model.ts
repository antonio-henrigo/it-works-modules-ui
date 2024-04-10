export interface IMenuItem {
  text: string;
  link?: string;
  icon?: string;
  role?: string;
  submenu?: IMenuItem[];
}
