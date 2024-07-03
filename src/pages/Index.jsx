import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <section className="hero bg-cover bg-center h-screen flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}>
        <h1 className="text-5xl font-bold">Explore the Universe with Our Rockets</h1>
        <p className="text-2xl mt-4">Join us on a journey beyond the stars</p>
        <Button className="mt-8" size="lg">Get Started</Button>
      </section>
      <section className="about py-16">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-4 text-lg">We are a company dedicated to exploring the vastness of space with our state-of-the-art rockets. Our mission is to make space travel accessible and safe for everyone.</p>
        <img src="https://placehold.co/600x400" alt="About Us" className="mt-8 mx-auto" />
      </section>
      <section className="features py-16 bg-gray-100">
        <h2 className="text-4xl font-bold">Our Features</h2>
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
      </section>
      <section className="gallery py-16">
        <h2 className="text-4xl font-bold">Gallery</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="https://placehold.co/600x400" alt="Gallery Image 1" className="w-full" />
          <img src="https://placehold.co/600x400" alt="Gallery Image 2" className="w-full" />
          <img src="https://placehold.co/600x400" alt="Gallery Image 3" className="w-full" />
        </div>
      </section>
      <section className="contact py-16 bg-gray-100">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
        <div className="mt-8 text-center">
          <p>Address: 123 Space St, Rocket City, RC 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@rocketinc.com</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
