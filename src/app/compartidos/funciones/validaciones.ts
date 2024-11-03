import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null => {
        const valor = <string>control.value;

        if(!valor) return null;
        if(valor.length === 0) return null;

        const primeraLetra = valor[0];

        if(primeraLetra !== primeraLetra.toUpperCase()){
            return {
                    primeraLetraMayuscula: {
                        mensaje: 'La primera letra debe ser mayúscula'
                    }
                }
        }

        return null;
    }
}

export function fechaNacimientoNoPuedeSerMayorAlDiaHoy(): ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
        const fecha = new Date(control.value);
        const hoy = new Date();

        if(fecha > hoy){
            return{
                fechaNoValida: {
                    mensaje:'La fecha no puede ser mayor al día actual'
                }
            }
        }

        return null;
    }
}