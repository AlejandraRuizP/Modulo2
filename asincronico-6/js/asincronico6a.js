let peliculas=[
    {titulo:"Forrest Gump", rating: 4.8,loHasVisto: true},

    {titulo:"Bohemian Rhapsody", rating: 4.7,loHasVisto: true},

    {titulo:"Dark Shadows",rating: 4.3,loHasVisto: false}

    ];

    for(let i in peliculas){

        document.write(peliculas[i].titulo +" - "+peliculas[i].rating+" Estrellas, "+ (peliculas[i].loHasVisto? "La viste": "no la viste") +" <br>");
    }