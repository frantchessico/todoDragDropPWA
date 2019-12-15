import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError() {
    this.snackBar.open('Você deve estar logado!', 'Vamos Lá.', {
      duration: 50000
    });

    if (this.authError) {
  return this.snackBar._openedSnackBarRef
  .onAction()
  .pipe(tap(_ => this.router.navigate(['login'])))
  .subscribe();
} else {
  this.router.navigate(['']);
}

  }
}
