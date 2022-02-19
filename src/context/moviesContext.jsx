import React, { createContext, useState } from 'react'

const mockup = [{
  id:"1",
  title:"La casa GUCCI",
  stars:0,
  numberOfReviews:0,
  img:"https://es.web.img3.acsta.net/pictures/21/11/10/10/42/1405636.jpg"
},{
  id:"2",
  title:"Dune",
  stars:0,
  numberOfReviews:0,
  img:"https://damiengwalter.files.wordpress.com/2021/12/dune.jpg?w=640"
},{
  id:"3",
  title:"Spiderman: No way home",
  stars:0,
  numberOfReviews:0,
  img:"http://metaunisex.com/wp-content/uploads/2021/12/snwh_poster_bluemontage_4x5fb_1_.jpg"
},
{
  id:"4",
  title:"Encanto",
  stars:0,
  numberOfReviews:0,
  img:"https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
},
{
  id:"5",
  title:"Encanto",
  stars:0,
  numberOfReviews:0,
  img:"https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
},
{id:"6",
title:"La casa GUCCI",
stars:0,
numberOfReviews:0,
img:"https://es.web.img3.acsta.net/pictures/21/11/10/10/42/1405636.jpg"
},{
id:"7",
title:"Dune",
stars:0,
numberOfReviews:0,
img:"https://damiengwalter.files.wordpress.com/2021/12/dune.jpg?w=640"
},{
id:"8",
title:"Spiderman: No way home",
stars:0,
numberOfReviews:0,
img:"http://metaunisex.com/wp-content/uploads/2021/12/snwh_poster_bluemontage_4x5fb_1_.jpg"
},
{
id:"9",
title:"Encanto",
stars:0,
numberOfReviews:0,
img:"https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
},
{
id:"10",
title:"Encanto",
stars:0,
numberOfReviews:0,
img:"https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
}
]

const movieContext = createContext()

const MoviesContext = ({children}) => {
  
  const [movies, setMovies] = useState(mockup)
  
  return (
    <movieContext.Provider value={{movies, setMovies}}>
        {children}
    </movieContext.Provider>
  )
}

export {
  MoviesContext,
  movieContext
}