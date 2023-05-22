import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
} from '@angular/core';
import { MyMonitoringService } from './loggingService/logging-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DASHackathon2023';

  eventNames: string[] = ['selectionchange', 'click'];

  constructor(private monitoringService: MyMonitoringService) {}

  ngOnInit(): void {
    this.monitoringService.filterEvents(this.eventNames);
  }
}
