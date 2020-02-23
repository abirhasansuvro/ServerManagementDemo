import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() onServerAdd = new EventEmitter<{
    newServerName: string;
    newServerContent: string;
  }>();
  @Output() onBlueAdd = new EventEmitter<{
    newServerName: string;
    newServerContent: string;
  }>();
  newServerName = "";
  newServerContent = "";
  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.onServerAdd.emit({
      newServerName: this.newServerName,
      newServerContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.onBlueAdd.emit({
      newServerName: this.newServerName,
      newServerContent: this.newServerContent
    });
  }
}
