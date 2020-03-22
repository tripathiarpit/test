import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ClientService} from '../client.service';
import {Response} from '../../../model/response';
import {Client} from '../../../model/client';
import {LoaderService} from '../../loader/loader.service';

@Component({
    selector: 'app-lookup-events',
    templateUrl: './lookup-events.component.html',
    styleUrls: ['./lookup-events.component.css']
})
export class LookupGoalEventsComponent implements OnInit {
    pageTitle: string;
    lookupEventsForm: FormGroup;
    byName: FormControl;
    byType: FormControl;
    byLocation: FormControl;
    response: Response;
    tableData: Client[];
    constructor(private clientService: ClientService,
                private  loader: LoaderService ) { }

    ngOnInit() {
        this.pageTitle = 'Search Goal Events';
        this.byName = new FormControl('', []);
        this.byType = new FormControl('', []);
        this.byLocation = new FormControl('', []);
        this.lookupEventsForm = new FormGroup({
            byName: this.byName,
            byType: this.byType,
            byLocation: this.byLocation
        });
        this.tableData = new Array();
    }
    searchClients() {
        this.loader.updateSpinner(true);
        if (this.byLocation.value !== '') {
            this.clientService.getClients().subscribe(response => {
                this.response = response;
                if (this.response.code == 200) {
                    this.tableData = this.response.data;
                    this.loader.updateSpinner(false);
                }
                this.loader.updateSpinner(false);
            });
        } else {
            this.clientService.getClients().subscribe(response => {
                this.response = response;
                if (this.response.code == 200) {
                    this.tableData = this.response.data;
                    this.loader.updateSpinner(false);
                }
                this.loader.updateSpinner(false);
            });
        }
    }
}
