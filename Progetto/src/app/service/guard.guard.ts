import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('loggato') == "true")
    {
      return true;
    }
  else
    inject(Router).navigate(['/login']);
    return false;
};
