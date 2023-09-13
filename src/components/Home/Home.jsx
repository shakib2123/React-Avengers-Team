import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [actors, setActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [costAmount, setCostAmount] = useState(0);
  const [totalAmount, setTotalActor] = useState(50000);
  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);
  const handleActorSelection = (actor) => {
    const isExist = selectedActors.find((item) => item.id === actor.id);
    let cost = actor.salary;

    if (isExist) {
      return alert("you already selected this actor");
    } else {
      selectedActors.forEach((item) => (cost += item.salary));
      const totalAmount = 50000 - cost;
      if (cost > 50000) {
        return alert(
          "stop you become poor now , become rich then come to hire actor."
        );
      } else {
        setTotalActor(totalAmount);
        setCostAmount(cost);
        setSelectedActors([...selectedActors, actor]);
      }
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {actors.map((actor) => (
          <div
            className="text-center border-2 border-amber-600 rounded-lg p-5 space-y-4"
            key={actor.id}
          >
            <figure className="flex justify-center">
              <img className="w-24 rounded-full" src={actor.image} alt="" />
            </figure>
            <h2 className="text-xl">Name: {actor.name}</h2>
            <h2>Salary: {actor.salary}</h2>
            <h2>Role: {actor.role}</h2>
            <h2>Citizen: {actor.country}</h2>
            <h2>Age: {actor.age}</h2>
            <button
              onClick={() => handleActorSelection(actor)}
              className="bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-green-500 hover:to-blue-500 "
            >
              Select
            </button>
          </div>
        ))}
      </div>
      <div>
        <Cart
          actors={actors}
          selectedActors={selectedActors}
          costAmount={costAmount}
          totalAmount={totalAmount}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
