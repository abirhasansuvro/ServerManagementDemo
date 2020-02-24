import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @ViewChild("serverContent", { static: true }) onservercontentadd: ElementRef;
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

  onAddServer(serverName: HTMLInputElement) {
    this.newServerName = serverName.value;
    this.onServerAdd.emit({
      newServerName: this.newServerName,
      newServerContent: this.onservercontentadd.nativeElement.value
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.newServerName = serverName.value;
    this.onBlueAdd.emit({
      newServerName: this.newServerName,
      newServerContent: this.onservercontentadd.nativeElement.value
    });
  }
}
