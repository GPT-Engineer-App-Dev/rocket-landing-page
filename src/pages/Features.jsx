const Features = () => {
  return (
    <div className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold">Our Features</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="feature text-center">
          <img src="https://placehold.co/100x100" alt="Advanced Technology" className="mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Advanced Technology</h3>
          <p className="mt-2">Our rockets are equipped with the latest technology to ensure a safe and efficient journey.</p>
        </div>
        <div className="feature text-center">
          <img src="https://placehold.co/100x100" alt="Safety First" className="mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Safety First</h3>
          <p className="mt-2">We prioritize safety above all else, ensuring that every mission is conducted with the utmost care.</p>
        </div>
        <div className="feature text-center">
          <img src="https://placehold.co/100x100" alt="Eco-Friendly" className="mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Eco-Friendly</h3>
          <p className="mt-2">Our rockets are designed to be environmentally friendly, minimizing our impact on the planet.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;