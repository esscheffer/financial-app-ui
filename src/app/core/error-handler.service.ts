import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) {
  }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof HttpErrorResponse && isClientErrorCode(errorResponse.status)) {
      msg = 'Error on process request.';

      try {
        msg = errorResponse.error[0].userMessage;
      } catch (e) {
      }

      console.error('There was an error', errorResponse);

    } else {
      msg = 'Error tying to process remote service. Try again later.';
    }

    this.messageService.add({severity: 'error', summary: msg});
  }
}

function isClientErrorCode(code: number) {
  return code >= 400 && code <= 499
}
