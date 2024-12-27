import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';


@Component({
  imports: [],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public usersService = inject(UsersService);

}
