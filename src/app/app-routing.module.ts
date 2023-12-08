import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { InfoComponent } from './components/info/info.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaUsuarioComponent } from './components/pagina-usuario/pagina-usuario.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { EditarPerfilUsuarioComponent } from './components/editar-perfil-usuario/editar-perfil-usuario.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { EditarContenidoComponent } from './components/editar-contenido/editar-contenido.component';
import { FotografiasComponent } from './components/fotografias/fotografias.component';
import { PinturasComponent } from './components/pinturas/pinturas.component';
import { GrafitisComponent } from './components/grafitis/grafitis.component';
import { TatuajesComponent } from './components/tatuajes/tatuajes.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { VideosComponent } from './components/videos/videos.component';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { EditarPublicacionComponent } from './components/editar-publicacion/editar-publicacion.component';
import { DonacionComponent } from './components/donacion/donacion.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { ComentarioEmocionesComponent } from './components/comentario-emociones/comentario-emociones.component';
import { ArtistasComponent } from './components/artistas/artistas.component';

const routes: Routes = [


    {path: 'inicio', component: PaginaInicialComponent,
        children: [
            {path: 'inicio-sesion', component: LoginComponent},
            {path: 'info', component: InfoComponent},
            {path: 'principal', component: PaginaPrincipalComponent},
            {path: 'fotografia', component: FotografiasComponent},
            {path: 'pintura', component: PinturasComponent},
            {path: 'grafiti', component: GrafitisComponent},
            {path: 'tatuajes', component: TatuajesComponent},
            {path: 'musica', component: CancionesComponent},
            {path: 'videos', component:VideosComponent},
            {path: 'infoUsuario', component: InfoUsuarioComponent},
            {path: 'donacion', component: DonacionComponent},
            {path: 'comentarios', component: ComentariosComponent},
            {path: 'artistas', component: ArtistasComponent}
        ]
    },
    {path: 'usuario', component: PaginaUsuarioComponent,
        children: [
            {path: 'perfilUsuario', component: PerfilUsuarioComponent},
            {path: 'editarPerfil', component: EditarPerfilUsuarioComponent},
            {path: 'contenido', component: ContenidoComponent},
            {path: 'redesSociales', component: RedesSocialesComponent},
            {path: 'editarContenido', component: EditarContenidoComponent},
            {path: 'editarPublicacion', component: EditarPublicacionComponent},
            {path: 'comentariosEmociones', component: ComentarioEmocionesComponent}
        ]
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
