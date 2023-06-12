const prefix = `StepContext`;

export type Action =
  | { type: 'StepContext/NEXT' }
  | { type: 'StepContext/PREVIOUS ' }
  | { type: 'StepContext/UPDATE' };

export const NEXT = `${prefix}/NEXT`;
export const PREVIOUS = `${prefix}/PREVIOUS`;
export const UPDATE = `${prefix}/UPDATE`;
