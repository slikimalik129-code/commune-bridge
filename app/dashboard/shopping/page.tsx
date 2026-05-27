export default function ShoppingPage() {
  const products = [
    {
      name: "Smart Walking Stick",
      price: "E1,200",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      name: "Voice Assistant Earbuds",
      price: "E850",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      name: "Emergency Smart Watch",
      price: "E2,000",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    },
  ];

  return (
    <main className="min-h-screen text-white p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-[40px] p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Smart Marketplace
          </h1>

          <p className="text-xl text-gray-100">
            Accessibility and smart living products.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-7">

                <h2 className="text-3xl font-bold mb-4">
                  {product.name}
                </h2>

                <div className="flex justify-between items-center">

                  <span className="text-cyan-400 text-2xl font-bold">
                    {product.price}
                  </span>

                  <button className="bg-cyan-500 hover:bg-cyan-400 transition text-black px-5 py-3 rounded-2xl font-bold">
                    Buy
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