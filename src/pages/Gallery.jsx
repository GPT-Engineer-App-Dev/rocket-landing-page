const Gallery = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold">Gallery</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <img src="https://placehold.co/600x400" alt="Gallery Image 1" className="w-full" />
        <img src="https://placehold.co/600x400" alt="Gallery Image 2" className="w-full" />
        <img src="https://placehold.co/600x400" alt="Gallery Image 3" className="w-full" />
      </div>
    </div>
  );
};

export default Gallery;