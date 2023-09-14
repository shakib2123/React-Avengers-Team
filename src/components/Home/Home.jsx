import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [actors, setActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalAmount, setTotalAmount] = useState(50000);
  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);
  const handleSelection = (actor) => {
    const isExist = selectedActors.find((item) => item.id === actor.id);
    let count = actor.salary;
    if (isExist) {
      return alert("you already selected this actor.");
    } else {
      selectedActors.forEach((item) => (count += item.salary));
      const totalAmount = 50000 - count;
      if (count > 50000) {
        return alert("Your balance is low.");
      } else {
        setTotalAmount(totalAmount);
        setTotalCost(count);
        setSelectedActors([...selectedActors, actor]);
      }
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actors.map((actor) => (
          <div
            className="space-y-3 border-2 border-rose-700 p-4 rounded-lg text-center"
            key={actor.id}
          >
            <figure className="flex justify-center">
              <img
                className="w-24 rounded-full contrast-100"
                src={actor.image}
                alt=""
              />
            </figure>
            <h3>Name: {actor.name}</h3>
            <p>Salary: {actor.salary}</p>
            <p>Citizen: {actor.country}</p>
            <p>Role: {actor.role}</p>
            <p>Age: {actor.age}</p>
            <button
              onClick={() => handleSelection(actor)}
              className="bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-green-500 hover:to-blue-500 "
            >
              Select
            </button>
          </div>
        ))}
      </div>
      <div>
        <Cart
          selectedActors={selectedActors}
          totalCost={totalCost}
          totalAmount={totalAmount}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
