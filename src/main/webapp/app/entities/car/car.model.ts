import { CarType } from 'app/entities/enumerations/car-type.model';

export interface ICar {
  id: number;
  model?: string | null;
  type?: CarType | null;
  serialNumber?: string | null;
  active?: boolean | null;
  color?: string | null;
  carYear?: number | null;
}

export type NewCar = Omit<ICar, 'id'> & { id: null };
