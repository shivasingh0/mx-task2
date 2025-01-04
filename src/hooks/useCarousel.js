import { useCallback, useState } from "react";

const useCarousel = (items, itemsPerView = 3) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = Math.max(0, items.length - itemsPerView + 1);
  const canGoNext = currentIndex < totalSlides - 1;
  const canGoPrevious = currentIndex > 0;

  const animate = useCallback((callback) => {
    setIsAnimating(true);
    callback();
    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  const handlePrevious = useCallback(() => {
    if (!canGoPrevious || isAnimating) return;
    animate(() => setCurrentIndex(prev => prev - 1));
  }, [canGoPrevious, isAnimating, animate]);

  const handleNext = useCallback(() => {
    if (!canGoNext || isAnimating) return;
    animate(() => setCurrentIndex(prev => prev + 1));
  }, [canGoNext, isAnimating, animate]);

  return {
    currentIndex,
    isAnimating,
    handleNext,
    handlePrevious,
    canGoNext,
    canGoPrevious
  };
};

export default useCarousel;