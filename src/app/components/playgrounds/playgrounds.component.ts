import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Playground } from 'src/app/models/playground';



interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<Playground> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<Playground> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}
@Component({
  selector: 'app-playgrounds',
  templateUrl: './playgrounds.component.html',
  styleUrls: ['./playgrounds.component.scss']
})
export class PlaygroundsComponent implements OnInit {
  listOfColumns: ColumnItem[] 
  
  playgrounds:Playground[] ;
  constructor() {
    this.listOfColumns = [
      {
        name: 'Name',
        sortOrder: null,
        sortFn: (a: Playground, b: Playground) => a.name.localeCompare(b.name),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        listOfFilter: [
          { text: 'playground', value: 'playground 1'  },
          // { text: 'Jim', value: 'Jim', byDefault: true}
        ],
        filterFn: (list: string[], item: Playground) => list.some(name => item.name.indexOf(name) !== -1)
      },
      {
        name: 'Hour price',
        sortOrder: 'descend',
        sortFn: (a: Playground, b: Playground) => a.hourPrice - b.hourPrice,
        sortDirections: ['descend', null],
        listOfFilter: [
          {text:"greater than 20",value:"20"},
          {text:"greater than 30",value:"30"},
        ],
        filterFn: (list: string[], item: Playground) => list.some(price =>
          item.hourPrice > parseInt( price) ),
        filterMultiple: true
      },
      {
        name: 'Location',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        sortFn: (a: Playground, b: Playground) => a.location.length - b.location.length,
        filterMultiple: false,
        listOfFilter: [
          { text: 'Qena', value: 'qena' },
          { text: 'Alex', value: 'alex' }
        ],
        filterFn: (address: string, item: Playground) => item.location.indexOf(address) !== -1
      },
    {
      name: 'Opening Time',
      sortOrder: null,
      sortFn: (a: Playground, b: Playground) => a.openingTime.localeCompare(b.openingTime),
      // sortFn: null,
      sortDirections: ['descend', null],
      listOfFilter: [
        {text:"af 10:00 am",value:"10:00"},
        {text:"af 22:00 am",value:"22:00"},
      ],
      filterFn: (list: string[], item: Playground) => list.some(time =>
          parseInt(item.openingTime) > parseInt( time) ),      
      filterMultiple: true
    },
      {
        name: 'closing Time',
        sortOrder: null,
        sortFn: (a: Playground, b: Playground) => a.closingTime.localeCompare(b.closingTime),
        // sortFn: null,
        sortDirections: ['descend', null],
        listOfFilter: [
          {text:"af 20:00 am",value:"20:00"},
          {text:"af 22:00 am",value:"22:00"},
        ],
        filterFn: (list: string[], item: Playground) => list.some(time =>
            parseInt(item.closingTime) > parseInt( time) ),      
        filterMultiple: true
      },
      {
        name:"Image",
        sortDirections:[],
        sortFn:null,
        sortOrder:null,
        listOfFilter:[],
        filterFn:null,
        filterMultiple:false
      },
    ];
    this.playgrounds =[
      {
          name:"playground 1",
          owner:"owner 1",
          email:"test@yahoo.com",
          password:"1234",
          hourPrice:20,
          phone:"01100000000",
          location:"qena",
          description:"description ...",
          image:"mal3b.jpg",
          openingTime:"10:00",
          closingTime:"20:00"
      },
      {
        name:"playground 2",
        owner:"owner 2",
        email:"test2@yahoo.com",
        password:"12342",
        hourPrice:40,
        phone:"01200000000",
        location:"qena",
        description:"description 2...",
        image:"mal3b.jpg",
        openingTime:"15:00",
        closingTime:"22:00"
    },
      {
        name:"playground 3",
        owner:"owner 3",
        email:"test3@yahoo.com",
        password:"12343",
        hourPrice:30,
        phone:"01300000000",
        location:"alex",
        description:"description 3...",
        image:"mal3b.jpg",
        openingTime:"11:00",
        closingTime:"23:00"
    },
  ]
  // console.log(parseInt(this.playgrounds[2].closingTime))

   }

  ngOnInit() {
  }

}
