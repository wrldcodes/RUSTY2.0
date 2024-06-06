//PROPS ---Properties

//Parent Component
import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";


export function Parent () {
 const [count, setCount] = useState(0);
 const startCount = () => {
  setCount(count + 1)
 };
  const [darkmode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkmode);
    // console.log('Theme changed')
   
  }
  const movies = [
  {
    title: "The Secret Garden",
    description: "A young orphan discovers a magical garden hidden at her uncle's estate.",
    genre: "Family, Fantasy",
    releaseYear: 2020,
    rating: 7.3,
    imageUrl: "https://th.bing.com/th/id/OIP.o0Ljgx4CFZNGLYHGZgesGwHaJ4?rs=1&pid=ImgDetMain"
  },
  {
    title: "Extraction",
    description: "A black-market mercenary is hired to rescue the kidnapped son of an imprisoned international crime lord.",
    genre: "Action, Thriller",
    releaseYear: 2020,
    rating: 6.7,
    imageUrl: "https://th.bing.com/th/id/R.31f3521fe901ec5b631da4b228bda2e6?rik=7P2EEHIhCW%2fZKA&pid=ImgRaw&r=0"
  },
  {
    title: "The Trial of the Chicago 7",
    description: "The story of 7 people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago, Illinois.",
    genre: "Drama, History",
    releaseYear: 2020,
    rating: 7.8,
    imageUrl: "https://th.bing.com/th/id/OIP.X-MjXqYgNOHrA4wChOLC5AHaEr?rs=1&pid=ImgDetMain"
  },
  {
    title: "Enola Holmes",
    description: "When Enola Holmes, Sherlock's teen sister, discovers her mother missing, she sets off to find her, becoming a super-sleuth in her own right.",
    genre: "Adventure, Crime",
    releaseYear: 2020,
    rating: 6.6,
    imageUrl: "https://th.bing.com/th/id/OIP.Vz9OcSiSGcWm5-hl7Q2kKQHaF2?rs=1&pid=ImgDetMain"
  },
  {
    title: "The Old Guard",
    description: "A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.",
    genre: "Action, Fantasy",
    releaseYear: 2020,
    rating: 6.7,
    imageUrl: "https://th.bing.com/th/id/R.6a104a7ade09442adc83004509d79af1?rik=%2figoJvU2QpOe2g&pid=ImgRaw&r=0"
  },
  {
    title: "Soul",
    description: "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.",
    genre: "Animation, Adventure",
    releaseYear: 2020,
    rating: 8.1,
    imageUrl: "https://th.bing.com/th/id/R.dfcd5373a7634bc34db27bb01b9bcfe8?rik=aoZu5xcl4IWXRA&pid=ImgRaw&r=0"
  }
  
];

    return (
        <div className={`px-12 ${darkmode ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <div className="items-center flex justify-between">
            <h1 className="text-3xl font-semibold text-center p-5 text-red-500">TroFlix</h1>
          <div className="inline-flex rounded-lg text-red-100 border-gray-100">
            <button className="inline-block rounded-md  bg-white px-4 py-2 shadow-sm focus:relative">Search</button>
          </div>
            <button className="" onClick={handleDarkModeChange}>{darkmode ? <MdOutlineLightMode/> : <MdOutlineDarkMode/> }</button>
          </div>
          <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
            <button className="inline-block rounded-md bg-white px-4 py-2 
            text-sm text-blue-500 shadow-sm focus:relative"  onClick={startCount}>{count}</button>
          </div>
            <div className=" grid grid-cols-2 gap-4 p-8">
               {movies.map((item)=>(
                  <ChildComponent Title={item.title} 
                                  Description={item.description} 
                                  Image={item.imageUrl} 
                                  genre={item.genre} 
                  />
                  
               ))}
            </div>
        </div>
    )
}

//ChildComponent
function ChildComponent ({Title, Description, Image, genre}) {
    return (
        <a href="#" className="group relative block bg-black">
  <img
    alt=""
    src={Image}
    className="absolute w-full inset-0 h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{genre}</p>

    <p className="text-xl font-bold text-white sm:text-2xl">{Title}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          {Description}
        </p>
      </div>
    </div>
  </div>
</a>
    )
}





