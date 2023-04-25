import { CarType } from 'app/entities/enumerations/car-type.model';

import { ICar, NewCar } from './car.model';

export const sampleWithRequiredData: ICar = {
  id: 96848,
};

export const sampleWithPartialData: ICar = {
  id: 24086,
  model: 'collaborative Loan',
  serialNumber: 'groupware Prairie',
  color: 'fuchsia',
};

export const sampleWithFullData: ICar = {
  id: 52187,
  model: 'Soft payment',
  type: CarType['SEDAN'],
  serialNumber: 'payment Configuration',
  active: true,
  color: 'pink',
  carYear: 41102,
};

export const sampleWithNewData: NewCar = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
