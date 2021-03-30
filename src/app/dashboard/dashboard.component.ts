import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public DATACHILD = {
    img: '',
    name: 'Oscar Name',
    classroom: 'Taungurung',
    dob: '19/03/2017',
    allergies: ['Peanuts'],
    mob: 'Yorta Yorta',
    attendance_details: [3, 5],
    mob_details: {
      name: 'Yorta Yorta'
    },
    health_details: {

    },
    event_details: {

    }

  };

  public DATAPARENT = {
    name: ['Mother name', 'Father name'],
    email: ['parent@bubupwilam.org.au', 'parent2@bubupwilam.org.au'],
    phone: ['0412123456', '0498765432'],
    address: ['211 High St, Thomastown VIC 3074'],

  };

  public DATATIMELINE = [
    {
      date: '20/03/21',
      title: 'Most recent health appointment',
      description: 'Lorem ipsum sit amet, consectetur adisicplit elit.'
    },
    {
      date: '04/01/21',
      title: 'Started in Taungurung classroom',
      description: 'Lorem ipsum sit amet, consectetur adisicplit elit.'
    },
    {
      date: '12/12/20',
      title: 'Health appointment',
      description: 'Lorem ipsum sit amet, consectetur adisicplit elit.'
    },
    {
      date: '10/11/20',
      title: 'Health appointment',
      description: 'Lorem ipsum sit amet, consectetur adisicplit elit.'
    },
    {
      date: '06/09/20',
      title: 'Health appointment',
      description: 'Lorem ipsum sit amet, consectetur adisicplit elit.'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
