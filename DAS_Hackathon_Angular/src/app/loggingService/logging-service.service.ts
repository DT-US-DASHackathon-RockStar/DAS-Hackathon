import { Injectable, OnInit } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { environment } from 'src/environments/environment';


@Injectable()
export class MyMonitoringService {
  appInsights: ApplicationInsights;
  constructor() {
    debugger;
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: environment.appInsights.instrumentationKey,
        enableAutoRouteTracking: false,
      },
    });
    this.appInsights.loadAppInsights();
  }

  filterEvents(eventNames: string[]) {
    for (let i = 0; i < eventNames.length; i++) {
      document.addEventListener(eventNames[i], (event: Event) => {
        this.logEvent(event.type + '_' + document.activeElement.id, {
          //htmlElement: document.activeElement,
          elementType: (document.activeElement as HTMLInputElement).type,
          elementId: document.activeElement.id,
        });
        console.log('Event Name is ' + event.type);
        console.log('Event target is ' + document.activeElement);
      });
    }
  }

  logPageView(name?: string, url?: string) {
    // option to call manually
    this.appInsights.trackPageView({
      name: name,
      uri: url,
    });
  }

  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name: name }, properties);
  }

  logMetric(
    name: string,
    average: number,
    properties?: { [key: string]: any }
  ) {
    this.appInsights.trackMetric({ name: name, average: average }, properties);
  }

  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({
      exception: exception,
      severityLevel: severityLevel,
    });
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message: message }, properties);
  }
}
