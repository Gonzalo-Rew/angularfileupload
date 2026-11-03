import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core/primitives/di';
import { Router } from '@angular/router';
import { ToastService } from 'ngx-yet-another-toast-library';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  const _router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      _router.navigate(['/error']);
      console.error('HTTP Error:', error);
      return throwError(() => error);
    }),
  );
};
