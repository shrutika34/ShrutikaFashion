import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./pages/product-details/product-details.component').then(m => m.ProductDetailsComponent)
      },
      {
        path: 'collection',
        loadComponent: () =>
          import('./pages/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: 'collection/:category',
        loadComponent: () =>
          import('./pages/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component').then(m => m.CartComponent)
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./pages/wishlist/wishlist.component').then(m => m.WishlistComponent)
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]),
    provideAnimations(),
    provideToastr()
  ]
};
