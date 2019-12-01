/**
 * @author:Mayur Patel
 * @description: Custom validations 
 */
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * It checks the control value of form is string or not.
 * This means that it accepts only string.
 */
export function validateCharacters(control: AbstractControl): ValidationErrors {
    if (!/^[^-\s][a-zA-Z ]+$/.test(control.value)) {
        return { invalidcharacters: true };
    }
    return null;
}

/**
 * It checks the control value of form is number or not.
 * This means that it accepts only  10 digit.
 */
export function validateOnlyNumber(control: AbstractControl): ValidationErrors {
    
    var pattern = new RegExp("^[0-9]{10}$");
    if (!pattern.test(control.value)) {
        return { invalidnumber: true };
    }
    return null;
}

/**
 * Validates email
 */
export function validateEmail(control: AbstractControl): ValidationErrors {
    if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(control.value)) {
        return { invalidemail: true };
    }
    return null;
}

