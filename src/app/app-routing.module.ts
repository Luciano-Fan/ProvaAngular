import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component'
import { ContentComponent } from './content/content.component'
import { CardsComponent } from './cards/cards.component'
import { PricingComponent } from './pricing/pricing.component'
import { FormsComponent } from './forms/forms.component'

export const routes: Routes = [
    {
        path: '',
        component: ContentComponent
    },

    {
        path: 'cards',
        component: CardsComponent
    },

    {
        path: 'blocks',
        component: BlocksComponent
    },

    {
        path: 'pricing',
        component: PricingComponent
    },


    {
        path: 'forms',
        component: FormsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}