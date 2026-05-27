export default function RentalsPage() {
 const rentals = [
  {
    place: "Mbabane Apartment",
    price: "E3,500/month",
    contact: "+268 76202313",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    place: "Manzini Rooms",
    price: "E2,000/month",
    contact: "+268 79825519",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    place: "Matsapha House",
    price: "E5,000/month",
    contact: "+268 76202313",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
];
  

  return (
    <main className="min-h-screen text-white p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-[40px] p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            House Rentals
          </h1>

          <p className="text-xl text-gray-100">
            Smart housing and landlord connections.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {rentals.map((home) => (
            <div
              key={home.place}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden"
            >

              <img
  src={home.image}
  alt={home.place}
  className="h-48 md:h-60 w-full object-cover"
/>

              <div className="p-7">

                <h2 className="text-3xl font-bold mb-3">
                  {home.place}
                </h2>

                <p className="text-cyan-400 text-2xl mb-4">
                  {home.price}
                </p>

                <p className="text-gray-400 mb-6">
                  {home.contact}
                </p>

                <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black py-3 rounded-2xl font-bold">
                  View Location
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}