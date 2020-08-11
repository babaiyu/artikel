import {EXAMPLE, Action} from 'storage/types';

export const exampleAction = (data: any): Action => ({
  type: EXAMPLE,
  data,
});
