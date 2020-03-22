import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable()
export class LoaderService {
    showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor() {
    }
    updateSpinner(flag: boolean) {
        this.showSpinner.next(flag);
    }

    getFlag(): Observable<any> {
        return this.showSpinner.asObservable();
    }
}
