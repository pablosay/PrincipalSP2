export class usuario {
    correo: string;
    nombre: string;
    descripcion: string;
    nacimiento: string;
    telefono: string;
    latitud: number;
    longitud: number;
    foto: string;
    constructor(correo: string, nombre:string, descripcion: string, nacimiento:string, telefono:string, latitud:number, longitud: number, foto: string){
        this.correo = correo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.nacimiento = nacimiento;
        this.telefono = telefono;
        this.latitud = latitud;
        this.longitud = longitud;
        this.foto = foto;
    }
}

export class respuestaPerfil{
    message:string;
    status: number;
    usuario: usuario[];
    constructor(message:string, status: number, user:usuario[]){
        this.message = message;
        this.status = status;
        this.usuario = user;
    } 
}

export class publicacion {
    usuario: string;
    nombre: string;
    titulo: string;
    descripcion: string;
    archivo: string;
    fecha: string;
    likes:number;
    constructor(usuario: string, nombre:string ,titulo:string, descripcion: string, archivo:string, fecha: string, likes:number){
        this.usuario = usuario;
        this.nombre = nombre;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.archivo = archivo;
        this.likes = likes;
    }
}

export class publicacionUsuario {
    titulo: string;
    descripcion: string;
    fecha: string;
    archivo: string;
    likes: number;
    constructor(titulo:string, descripcion: string, fecha: string, archivo:string, likes:number){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.archivo = archivo;
        this.likes = likes;
    }
}

export class respuestaPublicacionUsuario {
    message:string;
    status: number;
    publicacionUsuario: publicacionUsuario[];
    constructor(message:string, status: number, publicacionUsuario:publicacionUsuario[]){
        this.message = message;
        this.status = status;
        this.publicacionUsuario = publicacionUsuario;
    } 
}

export class respuestaPublicacion {
    message:string;
    status: number;
    publicaciones: publicacion[];
    constructor(message:string, status: number, publicaciones:publicacion[]){
        this.message = message;
        this.status = status;
        this.publicaciones = publicaciones;
    } 
}


export class respuesta {
    message:string;
    status: number;
    constructor(message:string, status: number){
        this.message = message;
        this.status = status;
    }
}

export class comentario {
    usuario:string;
    comentario:string;
    fecha:string;
    enojo:number;
    disgusto:number;
    miedo:number;
    alegria:number;
    neutral:number;
    tristeza:number;
    sorpresa:number;
    constructor(usuario:string,comentario:string,fecha:string,enojo:number,disgusto:number,miedo:number,alegria:number,neutral:number,tristeza:number,sorpresa:number){
        this.usuario = usuario;
        this.comentario = comentario;
        this.fecha = fecha;
        this.enojo = enojo;
        this.disgusto = disgusto;
        this.miedo = miedo;
        this.alegria = alegria;
        this.neutral = neutral;
        this.tristeza = tristeza;
        this.sorpresa = sorpresa;
    }
}

export class comentarios{
    message:string;
    status: number;
    comentarios: comentario[];
    constructor(message:string, status: number, comentarios:comentario[]){
        this.message = message;
        this.status = status;
        this.comentarios = comentarios;
    } 
}

export class publicacionDeUnUsuario{
    titulo: string;
    descripcion: string;
    fecha: string;
    archivo: string;
    likes: number;
    categoria: string;
    constructor(titulo:string, descripcion: string, fecha: string, archivo:string, likes:number, categoria:string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.archivo = archivo;
        this.likes = likes;
        this.categoria = categoria;
    }
}

export class publicacionesDeUnUsuario{
    message:string;
    status: number;
    publicacionesDeUnUsuario: publicacionDeUnUsuario[];
    constructor(message:string, status: number, publicacionesDeUnUsuario:publicacionDeUnUsuario[]){
        this.message = message;
        this.status = status;
        this.publicacionesDeUnUsuario = publicacionesDeUnUsuario;
    }
}

export class artista {
    correo: string;
    nombre: string;
    foto:string;
    likes: number;
    comentarios: number;
    fotografias: string;
    pinturas: string;
    musica: string;
    video: string;
    grafiti:string;
    tatuajes:string;
    constructor(correo: string, nombre:string, foto:string,likes:number, comentarios: number, fotografias: string,pinturas: string,musica: string,video: string,grafiti:string,tatuajes:string){
        this.correo = correo;
        this.nombre = nombre;
        this.foto = foto;
        this.likes = likes;
        this.comentarios = comentarios;
        this.fotografias = fotografias;
        this.pinturas = pinturas;
        this.musica = musica;
        this.video = video;
        this.grafiti = grafiti;
        this.tatuajes = tatuajes;
    }

}

export class artistas {
    correo: string;
    nombre: string;
    foto:string;
    constructor(correo: string, nombre:string, foto:string){
        this.correo = correo;
        this.nombre = nombre;
        this.foto = foto;
    }
}

export class listaArtistas{
    artistas:artistas[];
    constructor(artistas:artistas[]){
        this.artistas = artistas;
    }
}


export class listaResultadoLikes {
    listaLikes:like[];
    constructor(listaLikes:like[]){
        this.listaLikes = listaLikes;
    }
}

export class like {
    numero:number;
    constructor(numero:number){
        this.numero = numero;
    }
}

export class listaResultadoComentarios{
    listaNumeroComentarios: numeroDeComentariosPorArtista[];
    constructor(listaNumeroComentarios: numeroDeComentariosPorArtista[]){
        this.listaNumeroComentarios = listaNumeroComentarios;
    }
}

export class numeroDeComentariosPorArtista {
    numero: number;
    constructor(numero:number){
        this.numero = numero;
    }
}

export class listaResultadoNumeroPublicaciones {
    listaNumeroPublicacion: numeroDeComentariosPorArtista[];
    constructor(listaNumeroPublicacion: numeroDeComentariosPorArtista[]){
        this.listaNumeroPublicacion = listaNumeroPublicacion;
    }
}

export class numeroDePublicacionesPorCategoria {
    numero: number;
    constructor(numero:number){
        this.numero = numero;
    }
}


