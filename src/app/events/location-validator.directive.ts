import { Directive } from '@angular/core'
import { Validator, FormGroup, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]

})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address']
        let cityControl = formGroup.controls['city']
        let countryControl = formGroup.controls['country']
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl']
        console.log('here')
        if (this.validateControls(addressControl, cityControl, countryControl) ||
            this.validateControls(onlineUrlControl)) {
            return null
        }

        return { validateLocation: false }
    }

    validateControls(...controls: AbstractControl[]): boolean {
        
        return controls.every(x => {
            return x && x.value
        })
    }
}