import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [
    { name: "Test Server", type: "server", content: "Just Testing" }
  ];
  onServerAdded(dataEvent: {
    newServerName: string;
    newServerContent: string;
  }) {
    this.serverElements.push({
      type: "server",
      name: dataEvent.newServerName,
      content: dataEvent.newServerContent
    });
  }
  onBlueprintAdded(dataEvent: {
    newServerName: string;
    newServerContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: dataEvent.newServerName,
      content: dataEvent.newServerContent
    });
  }
}
