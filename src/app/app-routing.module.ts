import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home | Furni.'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home | Furni.'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About | Furni.'
    }
  },
  {
    path: 'shop',
    component: ShopComponent,
    data: {
      title: 'Shop | Furni.'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact | Furni.'
    }
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
    data: {
      title: 'Blog Detail | Furni.'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Blog | Furni.'
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Services | Furni.'
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'Cart | Furni.'
    }
  },
  {
    path: '**',
    component: NotfoundComponent,
    data: {
      title: '404 - Not Found | Furni.'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
