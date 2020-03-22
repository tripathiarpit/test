import { ClientService } from '../client.service';
import {Component, Inject, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import { Response } from 'src/app/model/response';
import { Client } from 'src/app/model/client';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatTableDataSource} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-client-table',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class LookuopEeventsTableComponent implements OnInit, OnChanges {
  response: Response;
  tableData: Client[];
  dataSource: MatTableDataSource<Client>;
  @Input() searchClientsResultsList: Array<Client>;
  description;
  displayedColumns: string[] = [
      'Sno',
      'City',
      'pincode',
      'description',
      'startDate',
      'enddate',
      'Actions'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientService: ClientService,
              public dialog: MatDialog) { }

  ngOnInit() {
    // this.getClients();
  }
  initializeDataSource(searchClientsResultsList: Client[]) {
    this.dataSource = new MatTableDataSource<Client>(this.searchClientsResultsList);
    this.dataSource.paginator = this.paginator;
  }
ngOnChanges(): void {
    this.initializeDataSource(this.searchClientsResultsList);
}
  editData()  {
 this.openDialog();

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditClientDetailsDialogComponent, {
      width: '50%',
      data: 'hi'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./client.component.css']
})
export class EditClientDetailsDialogComponent {
    name: string;
    email: string;
    phone: string;
    registerEventform: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditClientDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

