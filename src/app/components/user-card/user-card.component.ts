import { Component,Input,Output,EventEmitter } from '@angular/core';
import  {User} from "../../services/users/models/user.models";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() userDeleted = new EventEmitter<number>(); // Выходной параметр события удаления

  deleteUser(): void {
    this.userDeleted.emit(this.user.id); // Передаем id пользователя при удалении
  }
}
