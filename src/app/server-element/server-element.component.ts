import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ContentChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input() element: Element;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  constructor() {}

  ngOnInit() {}
}
interface Element {
  name: string;
  type: string;
  content: string;
}
