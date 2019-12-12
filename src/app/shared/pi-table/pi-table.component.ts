import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pi-table',
  templateUrl: './pi-table.component.html',
  styleUrls: ['./pi-table.component.scss']
})
export class PiTableComponent implements OnInit {
  @Input() tableData: { itemsList: any[], tableHead: string[], totalItemsCount?: number }

  constructor() { }

  ngOnInit() {
  }

}
