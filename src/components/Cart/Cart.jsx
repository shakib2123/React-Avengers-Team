const Cart = ({ actors, selectedActors, costAmount, totalAmount }) => {
  return (
    <div>
      <h1 className="text-3xl text-orange-600">
        Selected Actors: {actors.length}
      </h1>
      <h2>Total Amount: ${totalAmount}</h2>
      <h3>Cost: ${costAmount}</h3>
      {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </div>
  );
};

export default Cart;
