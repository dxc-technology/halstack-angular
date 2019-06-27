import { SliderInfoComponent } from 'src/app/pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checbkox/checkbox-info.component';
import { ButtonInfoComponent } from './pages/button/button-info.component';
import { DxcDateComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-date/dxc-date.component';
import { RadioInfoComponent } from './pages/radio/radio-info.component';


export const Components = [
    {
        name: 'Button',
        route: 'button',
        component: ButtonInfoComponent
    }, 
    {
        name: 'Checbkox',
        route: 'checkbox',
        component:  CheckboxInfoComponent
    },
    {
        name: 'Slider',
        route: 'slider',
        component: SliderInfoComponent
    },
    {
        name: 'Date',
        route: 'date',
        component: DxcDateComponent
    },
    {
        name: 'Radio',
        route: 'radio',
        component: RadioInfoComponent
    }
    
]
