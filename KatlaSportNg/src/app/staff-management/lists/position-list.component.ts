import { Component, OnInit } from '@angular/core';
import { PositionListItem } from '../models/position-list-item';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {

  positions: PositionListItem[];

  constructor(private positionService : PositionService) { }

  ngOnInit() {
    this.getPositions();
  }

  getPositions() {
    this.positionService.getPositions().subscribe(p => this.positions = p);
  }

}
