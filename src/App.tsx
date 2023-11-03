import "./App.css";
import { FilmsView } from "./components/FilmsView";
import { ListOffers } from "./components/ListOffers";
import { Chat } from "./components/Chat";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="title">Задание №1 - Рейтинг фильмов</h2>
        <FilmsView></FilmsView>
      </div>
      <div className="container">
        <h2 className="title">Задание №2 - Список предложений</h2>
        <ListOffers></ListOffers>
      </div>
      <div className="container">
        <h2 className="title">Задание №3 - История чата</h2>
        <Chat></Chat>
      </div>
    </>
  );
}

export default App;
