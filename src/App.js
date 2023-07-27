import "./App.css";
import Cinema from "./Cinema";
import Feedback from "./Feedback";
import MovieCard from "./MovieCard";

const movies = [
  {
    name: "Interstellar",
    genre: "Sci-Fi",
    director: "Cristopher Nolan",
    description: "Cox good movie",
    rating: "8.7",
    src: "https://pbs.twimg.com/media/EmUeXUZVcAA5v6j?format=jpg&name=medium",
  },
  {
    name: "Ed Edd n Eddy",
    genre: "Comedy",
    description: "Cox funny movie",
    director: "Danny Antonucci",
    rating: "7.5",
    src: "https://sketchok.com/images/articles/01-cartoons/000-va/25/32.jpg",
  },
  {
    name: "Oppenheimer",
    genre: "Drama",
    description: "Cox realistic movie",
    director: "Cristopher Nolan",
    rating: "8.9",
    src: "https://media.gq.com/photos/645956c367d4264086a5d77f/16:9/w_2352,h_1323,c_limit/Screen%20Shot%202023-05-08%20at%204.07.48%20PM.png",
  },
];

const cinema = {
  avatar:
    "https://media.licdn.com/dms/image/C560BAQEc06pJKCewvw/company-logo_200_200/0/1568807207257?e=2147483647&v=beta&t=BRWpA6cthMgqChS_3SVVmo91eWTC0kGXrvFY5EM3H74",
  name: "Step IT Cinema",
  address: "Koroglu Rahimov 70",
  rating: "9.7",
};

const feedbacks = [
  {
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    username: "aallirza",
    content:
      "Salon ve oturacaqlar cox temizdi, ses avadanliqlari yuksek seviyyede isleyir",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    username: "nurlan.shirinov",
    content:
      "Orta sirada oturanda ekrani tam gormek olmur ve goruntu keyfiyyeti pisdir",
  },
];

function App() {
  return (
    <div>
      <Cinema cinema={cinema}></Cinema>

      <MovieCard movie={movies[0]}></MovieCard>
      <MovieCard movie={movies[2]}></MovieCard>
      <MovieCard movie={movies[1]}></MovieCard>
      <MovieCard movie={movies[1]}></MovieCard>
      <MovieCard movie={movies[0]}></MovieCard>
      <MovieCard movie={movies[2]}></MovieCard>
      <h1>Feedbacks:</h1>
      <Feedback feedback={feedbacks[0]}></Feedback>
      <Feedback feedback={feedbacks[1]}></Feedback>
    </div>
  );
}

export default App;
