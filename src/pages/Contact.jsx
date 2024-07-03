import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold">Contact Us</h1>
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
    </div>
  );
};

export default Contact;