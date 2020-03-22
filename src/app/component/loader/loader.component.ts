import {Component, Input, OnInit} from '@angular/core';
import {LoaderService} from './loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

    showSpinner: boolean;

    constructor(private loaderService: LoaderService) {
    }

    ngOnInit() {
        this.loaderService.getFlag().subscribe((flag: boolean) => {
            this.showSpinner = flag;
        });
    }
}
