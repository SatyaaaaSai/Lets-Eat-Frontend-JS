import "./Common.css";
const MainPage = () => {
  return (
    <div>
      <main className="flex-1" id="menusection animi">
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6 m-10">
              <h1 className="text-4xl font-bold tracking-tight">
                Discover the Wholesome Food Experiences
              </h1>
              <p className="text-gray-600">
                Explore our curated selection of top-rated restaurants and
                indulge in mouthwatering dishes that will tantalize your taste
                buds.
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Find a Restaurant
                </button>
                <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded">
                  View Menu
                </button>
              </div>
            </div>
            <div>
              <img 
                src="https://res.cloudinary.com/dwjafitz1/image/upload/v1724126443/wy0atmupe5nd6ebnccba.jpg"
                width={700}
                height={400}
                alt="Restaurant"
                className="rounded-lg object-cover px-4"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
