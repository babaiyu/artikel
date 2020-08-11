export interface Action {
  type: string;
  data?: any;
  message?: string;
}

// ====================== EXAMPLE ======================
export const EXAMPLE = 'EXAMPLE';

export interface ExampleState {
  dataExample: any;
}
