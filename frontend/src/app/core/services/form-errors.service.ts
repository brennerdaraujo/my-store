import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormErrorsService {
  getErrorMessage(errors: any): string {
    if (errors['required'])
      return 'Campo obrigatório.';

    if (errors['mask'])
      return 'Formato do campo inválido.';

    if (errors['min'])
      return 'Valor inválido.';

    if (errors['maxlength'])
      return `Campo não pode ter mais de ${errors['maxlength'].requiredLength} caracteres.`;

    return '';
  }
}
