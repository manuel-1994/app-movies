const moviesInitialState = [{
  id:"1",
  title:"The King's Man: La Primera Misión (2021)",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://www.themoviedb.org/t/p/original/lFu7pTdf4gXABogCmPE0cBkVQZu.jpg",
    background: "https://www.themoviedb.org/t/p/original/6qkeXdIEwqOuOWuxsomwnin2RdD.jpg"
  },
  overview: 'Cuando un grupo formado por los tiranos y las mentes criminales más malvadas de la historia se une para desencadenar una guerra que matará a millones de personas, un hombre tendrá que luchar a contrarreloj para detenerlos. Tercera entrega de la saga "Kingsman", ambientada muchos años antes de las anteriores y explicando el origen de la agencia.'
},
{
  id:"2",
  title:"Dune",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://damiengwalter.files.wordpress.com/2021/12/dune.jpg?w=640",
    background: "https://www.themoviedb.org/t/p/original/jtVl3nN5bJ4t7pgakLfGJmOrqZm.jpg"
  },
  overview: 'En un lejano futuro, la galaxia conocida es gobernada mediante un sistema feudal de casas nobles bajo el mandato del Emperador. Las alianzas y la política giran entorno a un pequeño planeta, Dune, del que extrae la "especia melange", la materia prima que permite los viajes espaciales. La Casa Atreides, bajo el mandato del Duque Leto Atreides recibe el encargo de custodiar el planeta, relevando en la encomienda a sus históricos enemigos, los Harkonnen. Paul Atreides, hijo del duque, se verá atrapado en las intrigas políticas mientras descubre el destino que le deparan los desiertos de Dune.'
},
{
  id:"3",
  title:"Spiderman: No way home",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://www.themoviedb.org/t/p/original/osYbtvqjMUhEXgkuFJOsRYVpq6N.jpg",
    background: "https://www.themoviedb.org/t/p/original/uhYpkLSnlOXTQDmNnu1X4MHMt1S.jpg"
  },
  overview: 'Peter Parker es desenmascarado y por tanto no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un súper héroe. Cuando pide ayuda a Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser Spider-Man.'
},
{
  id:"4",
  title:"Encanto",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://www.themoviedb.org/t/p/original/d0ezQ1Jz0lpNsX1skEmIvqRL7mN.jpg",
    background: "https://www.themoviedb.org/t/p/original/ik3sCC9fziS4SnagwRAQWPytBtj.jpg"
  },
  overview: '"Encanto" relata la historia de los Madrigal, una familia extraordinaria que vive en una casa mágica de un pueblo vibrante en las montañas de Colombia escondidas en un “Encanto”. La magia del Encanto ha bendecido a cada niño de la familia con un don único, desde la superfuerza hasta el poder de sanar. A todos, excepto Mirabel, quien desea ser tan especial como el resto de su familia. Pero cuando la magia que rodea al Encanto está en peligro, Mirabel decide que ella, la única Madrigal sin ningún tipo de don único, puede ser la única esperanza de su excepcional familia.'
},
{
  id:"5",
  title:"Hotel Transilvania: Transformanía (2022)",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://www.themoviedb.org/t/p/original/pwSlzCAynIF6aEP7oxWddo7Kng2.jpg",
    background: "https://www.themoviedb.org/t/p/original/qBLEWvJNVsehJkEJqIigPsWyBse.jpg"
  },
  overview: 'Drac y la pandilla vuelven, como nunca los habías visto antes en Hotel Transilvania: Transformanía. Volveremos a encontrarnos con nuestros monstruos favoritos en una aventura completamente nueva en la que Drac se enfrentará a una de las situaciones más aterradoras vividas hasta el momento. Cuando el misterioso invento de Van Helsing, el "Rayo Monstrificador", se vuelve totalmente fuera de control, Drac y sus monstruosos amigos se transforman en humanos, ¡y Johnny se convierte en un monstruo!'
},
{
  id:"6",
  title:"The King's Man: La Primera Misión (2021)",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://www.themoviedb.org/t/p/original/lFu7pTdf4gXABogCmPE0cBkVQZu.jpg",
    background: "https://www.themoviedb.org/t/p/original/6qkeXdIEwqOuOWuxsomwnin2RdD.jpg"
  },
  overview: 'Cuando un grupo formado por los tiranos y las mentes criminales más malvadas de la historia se une para desencadenar una guerra que matará a millones de personas, un hombre tendrá que luchar a contrarreloj para detenerlos. Tercera entrega de la saga "Kingsman", ambientada muchos años antes de las anteriores y explicando el origen de la agencia.'
},
{
  id:"7",
  title:"Dune",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://damiengwalter.files.wordpress.com/2021/12/dune.jpg?w=640",
    background: "https://www.themoviedb.org/t/p/original/jtVl3nN5bJ4t7pgakLfGJmOrqZm.jpg"
  },
  overview: 'En un lejano futuro, la galaxia conocida es gobernada mediante un sistema feudal de casas nobles bajo el mandato del Emperador. Las alianzas y la política giran entorno a un pequeño planeta, Dune, del que extrae la "especia melange", la materia prima que permite los viajes espaciales. La Casa Atreides, bajo el mandato del Duque Leto Atreides recibe el encargo de custodiar el planeta, relevando en la encomienda a sus históricos enemigos, los Harkonnen. Paul Atreides, hijo del duque, se verá atrapado en las intrigas políticas mientras descubre el destino que le deparan los desiertos de Dune.'
},
{
  id:"8",
  title:"Spiderman: No way home",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://www.themoviedb.org/t/p/original/osYbtvqjMUhEXgkuFJOsRYVpq6N.jpg",
    background: "https://www.themoviedb.org/t/p/original/uhYpkLSnlOXTQDmNnu1X4MHMt1S.jpg"
  },
  overview: 'Peter Parker es desenmascarado y por tanto no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un súper héroe. Cuando pide ayuda a Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser Spider-Man.'
},
{
  id:"9",
  title:"Encanto",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://www.themoviedb.org/t/p/original/d0ezQ1Jz0lpNsX1skEmIvqRL7mN.jpg",
    background: "https://www.themoviedb.org/t/p/original/ik3sCC9fziS4SnagwRAQWPytBtj.jpg"
  },
  overview: '"Encanto" relata la historia de los Madrigal, una familia extraordinaria que vive en una casa mágica de un pueblo vibrante en las montañas de Colombia escondidas en un “Encanto”. La magia del Encanto ha bendecido a cada niño de la familia con un don único, desde la superfuerza hasta el poder de sanar. A todos, excepto Mirabel, quien desea ser tan especial como el resto de su familia. Pero cuando la magia que rodea al Encanto está en peligro, Mirabel decide que ella, la única Madrigal sin ningún tipo de don único, puede ser la única esperanza de su excepcional familia.'
},
{
  id:"10",
  title:"Hotel Transilvania: Transformanía (2022)",
  stars:0,
  numberOfReviews:0,
  image:{
    poster: "https://www.themoviedb.org/t/p/original/pwSlzCAynIF6aEP7oxWddo7Kng2.jpg",
    background: "https://www.themoviedb.org/t/p/original/qBLEWvJNVsehJkEJqIigPsWyBse.jpg"
  },
  overview: 'Drac y la pandilla vuelven, como nunca los habías visto antes en Hotel Transilvania: Transformanía. Volveremos a encontrarnos con nuestros monstruos favoritos en una aventura completamente nueva en la que Drac se enfrentará a una de las situaciones más aterradoras vividas hasta el momento. Cuando el misterioso invento de Van Helsing, el "Rayo Monstrificador", se vuelve totalmente fuera de control, Drac y sus monstruosos amigos se transforman en humanos, ¡y Johnny se convierte en un monstruo!'
}]

const moviesReducer = (state,action) => {
  switch (action.type) {
    case 'addStars':
      return [...state]
    case 'delStars':
      return [...state]
    default:
      return state
  }
}

export {
  moviesReducer,
  moviesInitialState
}
