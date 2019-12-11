import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from '../models/position';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.css']
})
export class PositionFormComponent implements OnInit {

  position = new Position(0, "");
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private positionService: PositionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.positionService.getPosition(p['id']).subscribe(p => this.position = p);
      this.existed = true;
    });
  }

  navigateToPositions() {
    this.router.navigate(['/positions']);
  }

  onCancel() {
    this.navigateToPositions();
  }

  onSubmit() {
    if (this.existed) {
      this.positionService.updatePosition(this.position).subscribe(l => this.navigateToPositions());
    } else {
      this.positionService.addPosition(this.position).subscribe(l => this.navigateToPositions());
    }
  }

  onPurge() {
    this.positionService.deletePosition(this.position.id).subscribe(h => this.navigateToPositions());
  }
}
