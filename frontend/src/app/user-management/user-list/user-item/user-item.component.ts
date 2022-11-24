import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { UserModel } from "../../user.model";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.css"],
})
export class UserItemComponent implements OnInit {
  @Input()
  user!: UserModel;
  @Output() userSelected = new EventEmitter<void>();

  ngOnInit(): void {}
  onSelect() {
    this.userSelected.emit();
  }
}
