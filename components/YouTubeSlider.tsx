import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: string;
  title: string;
}

const YouTubeSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add your YouTube video IDs here
  const videos: Video[] = [
    { id: '9eDrhvy6EtU', title: 'Video 1' },
    { id: 'MPF1g7D6LJw', title: 'Video 2' },
    { id: 'q6vRNIorLeM', title: 'Video 3' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
      {/* Video Container */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videos[currentIndex].id}?rel=0`}
          title={videos[currentIndex].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-corail-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous video"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-corail-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next video"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-6">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-corail-900'
                : 'w-3 h-3 bg-corail-300 hover:bg-corail-500'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default YouTubeSlider;
