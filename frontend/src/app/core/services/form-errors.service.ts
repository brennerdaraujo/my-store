import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormErrorsService {
  // TODO Terminar de preencher os erros
  getErrorMessage(errors: any): string {
    if (errors['required'])
      return 'Campo obrigatório.';

    if (errors['mask'])
      return 'Formato do campo inválido.';

    if (errors['min'])
      return 'Valor inválido.';

    return '';
  }
}
