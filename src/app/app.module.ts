import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { InfoComponent } from './components/info/info.component';
import { TopBarInicioComponent } from './components/top-bar-inicio/top-bar-inicio.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { PaginaUsuarioComponent } from './components/pagina-usuario/pagina-usuario.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import {MenuItemContent, MenuModule} from 'primeng/menu';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { CardModule} from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import {DividerModule} from 'primeng/divider';
import { EditarPerfilUsuarioComponent } from './components/editar-perfil-usuario/editar-perfil-usuario.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {GMapModule} from 'primeng/gmap';
import { AgmCoreModule } from '@agm/core';
import { FotografiasComponent } from './components/fotografias/fotografias.component';
import { PinturasComponent } from './components/pinturas/pinturas.component';
import { GrafitisComponent } from './components/grafitis/grafitis.component';
import { TatuajesComponent } from './components/tatuajes/tatuajes.component';
import { VideosComponent } from './components/videos/videos.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { EditarContenidoComponent } from './components/editar-contenido/editar-contenido.component';
import {ImageModule} from 'primeng/image';
import { VimeModule } from '@vime/angular';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { EditarPublicacionComponent } from './components/editar-publicacion/editar-publicacion.component';
import { DonacionComponent } from './components/donacion/donacion.component';
import {DataViewModule} from 'primeng/dataview';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import {TableModule} from 'primeng/table';
import { ComentarioEmocionesComponent } from './components/comentario-emociones/comentario-emociones.component';
import {ChartModule} from 'primeng/chart';
import { FooterComponent } from './components/footer/footer.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CheckboxModule,
        PasswordModule,
        RouterModule,
        SocialLoginModule,
        MenuModule,
        CardModule,
        ChipModule,
        DividerModule,
        InputTextModule,
        CalendarModule,
        InputTextareaModule,
        FileUploadModule,
        MessageModule,
        MessagesModule,
        RadioButtonModule,
        ReactiveFormsModule,
        GMapModule,
        AgmCoreModule,
        ImageModule,
        VimeModule,
        DataViewModule,
        ToggleButtonModule,
        TableModule,
        ChartModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PaginaInicialComponent,
        InfoComponent,
        TopBarInicioComponent,
        PaginaPrincipalComponent,
        PaginaUsuarioComponent,
        MenuUsuarioComponent,
        MenuItemComponent,
        PerfilUsuarioComponent,
        EditarPerfilUsuarioComponent,
        ContenidoComponent,
        RedesSocialesComponent,
        FotografiasComponent,
        PinturasComponent,
        GrafitisComponent,
        TatuajesComponent,
        VideosComponent,
        CancionesComponent,
        EditarContenidoComponent,
        InfoUsuarioComponent,
        EditarPublicacionComponent,
        DonacionComponent,
        ComentariosComponent,
        ComentarioEmocionesComponent,
        FooterComponent,
        ArtistasComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
              autoLogin: false,
              providers: [
                {
                  id: GoogleLoginProvider.PROVIDER_ID,
                  provider: new GoogleLoginProvider(
                    '75872991978-31p77idjvdnvae9nhfijkep1h6dc2bd3.apps.googleusercontent.com'
                  )
                },
              ],
              onError: (err) => {
                console.error(err);
              }
            } as SocialAuthServiceConfig,
          }, MessageService, DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
