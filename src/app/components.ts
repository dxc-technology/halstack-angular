import { SliderInfoComponent } from 'src/app/pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checbkox/checkbox-info.component';
import { ButtonInfoComponent } from './pages/button/button-info.component';


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
    }
]
