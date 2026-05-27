export default function FoodPage() {
  const restaurants = [
    {
      name: "Nando's",
      meal: "Chicken Combo",
      price: "E120",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      name: "Roman's Pizza",
      meal: "Large Pizza",
      price: "E150",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      name: "Galito's",
      meal: "Hot Wings",
      price: "E95",
      image:
        "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
    },
  ];

  return (
    <main className="min-h-screen text-white p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-[40px] p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Food Delivery
          </h1>

          <p className="text-xl text-gray-100">
            Smart food ordering from local restaurants.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden"
            >

              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="h-48 md:h-60 w-full object-cover"
              />

              <div className="p-7">

                <h2 className="text-3xl font-bold mb-3">
                  {restaurant.name}
                </h2>

                <p className="text-gray-400 mb-4">
                  {restaurant.meal}
                </p>

                <div className="flex justify-between items-center">

                  <span className="text-cyan-400 text-2xl font-bold">
                    {restaurant.price}
                  </span>

                  <button className="bg-cyan-500 hover:bg-cyan-400 transition text-black px-5 py-3 rounded-2xl font-bold">
                    Order
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}