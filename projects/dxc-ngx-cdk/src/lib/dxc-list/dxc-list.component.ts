import { ScrollService } from './../services/scroll.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dxc-list',
  templateUrl: './dxc-list.component.html',
  styleUrls: ['./dxc-list.component.scss']
})
export class DxcListComponent implements OnInit {
  @Input() list: any;
  @Input('badgeNode') badgeNode: string = 'count';
  @Input('maxBadge') maxBadge: number = -1;
  @Input('badgeTypeNode') badgeTypeNode: string = 'type';
  @Input('sortorder') sortOrder = 'asc';
  @Input('sortfield') sortField = 'title';
  @Input('hrefcontent') hrefContent = '';
  @Input('infotooltippos') infoToolTipPos = 'below';
  @Input() modeState = {};
  @Output() currentselectionChange = new EventEmitter<any>();
  @Output() selectEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() currentselection: any;
  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }
  selected = (item) => {
    this.currentselection = item;
    this.currentselectionChange.emit(item);
    this.selectEvent.emit(item);
    if (item.name) {
      this.scrollToId(item.name);
    }
  }
  scrollToId(id: string) {
    this.scrollService.scrollToElementById('scroll_'+id);
  }

  scrollToElement(element: HTMLElement) {
    this.scrollService.scrollToElement(element);
  }
}
