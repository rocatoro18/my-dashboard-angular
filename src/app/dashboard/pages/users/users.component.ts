import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';


@Component({
  imports: [CommonModule,RouterModule ,TitleComponent],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public usersService = inject(UsersService);


}
