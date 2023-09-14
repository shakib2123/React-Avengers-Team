const Cart = ({ selectedActors, totalCost, totalAmount }) => {
  return (
    <div>
      <div className=" mb-8 space-y-1">
        <h2 className="text-3xl text-orange-500">
          Selected Actors: {selectedActors.length}
        </h2>
        <h3>Total Amount: ${totalAmount}</h3>
        <h3 className="text-rose-400 text-xl">Total Cost: ${totalCost}</h3>
      </div>
      <div className="space-y-4">
        {selectedActors.map((actor) => (
          <div
            className="w-72 flex items-center gap-4 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-lg"
            key={actor.id}
          >
            <figure>
              <img className="w-20 rounded-l-lg" src={actor.image} alt="" />
            </figure>
            <div>
              <h3>Name: {actor.name}</h3>
              <p>Salary: {actor.salary}</p>
              <p>Role: {actor.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
