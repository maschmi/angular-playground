import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IPlanet} from '../models/planet.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ConvertYesNoPipe} from '../shared/convert-yes-no.pipe';


@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  })
export class PlanetDetailsComponent implements OnInit, OnChanges {

  @Input() public planet: IPlanet;

  get planetForm(): FormGroup {
    return this.formGroup;
  }

  get planetNameControl(): FormControl {
    return this.planetForm.get('name') as FormControl ?? new FormControl();
  }

  get planetYearControl(): FormControl {
    return this.planetForm.get('discoveryYear') as FormControl ?? new FormControl();
  }

  get planetHabitableControl(): FormControl {
    return this.planetForm.get('habitable') as FormControl ?? new FormControl();
  }

  get systemNameControl(): FormControl {
    return this.formGroup.get('system').get('name') as FormControl ?? new FormControl();
  }

  get systemDistanceControl(): FormControl {
    return this.formGroup.get('system').get('distance') as FormControl ?? new FormControl();
  }

  private formGroup: FormGroup;

  constructor(private fb: FormBuilder, private convertYesNoPipe: ConvertYesNoPipe) { }

  ngOnInit(): void {
    this.formGroup = this.createFormGroup();
    this.formGroup.disable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.planet && !changes.planet.isFirstChange()) {
      this.patchValues(changes.planet.currentValue as IPlanet);
    }
  }

  private patchValues(currentValue: IPlanet) {
    const formData = {
      ...currentValue,
      habitable: this.convertYesNoPipe.transform(currentValue.habitable)
    };
    this.formGroup.patchValue(formData);
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      name: [],
      discoveryYear: [],
      system: this.createSystemGroup(),
      habitable: []
      }
    );

  }

  private createSystemGroup(): FormGroup {
    return this.fb.group( {
        name: [],
        distance: []
      }
    );
  }

}
