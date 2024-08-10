/**
 * Option types
 */

export interface Option {
  id: number;
  title: string;
  active: boolean;
}

export type NewOption = Omit<Option, "id, active, completed">;
