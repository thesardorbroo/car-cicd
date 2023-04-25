import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ICar, NewCar } from '../car.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ICar for edit and NewCarFormGroupInput for create.
 */
type CarFormGroupInput = ICar | PartialWithRequiredKeyOf<NewCar>;

type CarFormDefaults = Pick<NewCar, 'id' | 'active'>;

type CarFormGroupContent = {
  id: FormControl<ICar['id'] | NewCar['id']>;
  model: FormControl<ICar['model']>;
  type: FormControl<ICar['type']>;
  serialNumber: FormControl<ICar['serialNumber']>;
  active: FormControl<ICar['active']>;
  color: FormControl<ICar['color']>;
  carYear: FormControl<ICar['carYear']>;
};

export type CarFormGroup = FormGroup<CarFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class CarFormService {
  createCarFormGroup(car: CarFormGroupInput = { id: null }): CarFormGroup {
    const carRawValue = {
      ...this.getFormDefaults(),
      ...car,
    };
    return new FormGroup<CarFormGroupContent>({
      id: new FormControl(
        { value: carRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      model: new FormControl(carRawValue.model, {
        validators: [Validators.maxLength(32)],
      }),
      type: new FormControl(carRawValue.type),
      serialNumber: new FormControl(carRawValue.serialNumber, {
        validators: [Validators.maxLength(32)],
      }),
      active: new FormControl(carRawValue.active),
      color: new FormControl(carRawValue.color, {
        validators: [Validators.maxLength(32)],
      }),
      carYear: new FormControl(carRawValue.carYear),
    });
  }

  getCar(form: CarFormGroup): ICar | NewCar {
    return form.getRawValue() as ICar | NewCar;
  }

  resetForm(form: CarFormGroup, car: CarFormGroupInput): void {
    const carRawValue = { ...this.getFormDefaults(), ...car };
    form.reset(
      {
        ...carRawValue,
        id: { value: carRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): CarFormDefaults {
    return {
      id: null,
      active: false,
    };
  }
}
