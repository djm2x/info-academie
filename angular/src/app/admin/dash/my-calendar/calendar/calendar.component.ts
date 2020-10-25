import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CalendarView, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarDateFormatter } from 'angular-calendar';
import { subDays, startOfDay, addDays, endOfMonth, addHours, isSameMonth, isSameDay, endOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { EventProf } from 'src/app/models/models';
import { CustomDateFormatter } from './custom-date-formatter.provider';


const colors = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class CalendarComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  @Input() myEvent = new Subject();
  @Input() myEvents = new Subject();
  @Input() dateChange = new Subject();
  @Input() handleEvents = new Subject();

  actions: CalendarEventAction[] = [
    {
      // label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      label: 'edit',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.handleEvent('Edited', event);
        this.handleEvents.next({o: event, action: 'edit'});
      },
    }, {
      // label: '<i class="fas fa-fw fa-trash-alt"></i>',
      label: 'delete',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        // this.handleEvent('Deleted', event);
        this.handleEvents.next({o: event, action: 'delete'});
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];
  activeDayIsOpen = true;

  constructor(/*private modal: NgbModal*/) { }

  ngOnInit(): void {
    this.myEvents.subscribe((r: EventProf[]) => {
      this.events = r.map(e => {
        return {
          ...e,
          start: new Date(e.start),
          end: new Date(e.end),
          color: colors.red,
          actions: this.actions,
          // allDay: true,
          draggable: true,
          resizable: { beforeStart: true, afterEnd: true },
        };
      });

      this.refresh.next();


    });

    // this.myEvent.subscribe((e: EventProf) => {
    //   console.log(e)
    //   this.events.push({
    //     ...e,
    //     start: new Date(e.start),
    //     end: new Date(e.end),
    //     color: colors.red,
    //     actions: this.actions,
    //     // allDay: true,
    //     resizable: { beforeStart: true, afterEnd: true },
    //     draggable: true,
    //   });

    //   this.refresh.next();

    //   console.log(this.events[0])
    // });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    // console.log(date);
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });

    if (action === 'delete') {
      this.deleteEvent(event);
    }

    // console.log(this.modalContent, { size: 'lg' })
  }

  addEvent(): void {
    const d0 = addDays(new Date(), 2);
    const d1 = addDays(new Date(), 3);

    this.events = [...this.events, {
      title: 'New event me',
      start: startOfDay(d0),
      end: endOfDay(d0),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;

    this.dateChange.next(this.viewDate);
  }
}
