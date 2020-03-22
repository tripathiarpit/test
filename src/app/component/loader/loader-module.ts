import {LoaderComponent} from './loader.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from '../../module/custom-material/custom-material.module';
import {LoaderService} from './loader.service';

@NgModule({
    imports: [
        CustomMaterialModule,
        CommonModule,
    ],
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ],
    providers: [LoaderService]
})
export class LoaderModule {
}
