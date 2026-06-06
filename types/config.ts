export interface BaseComponent {
  type: string;
  [key: string]: any;
}

export interface PageConfig {
  title?: string;
  components: BaseComponent[];
}