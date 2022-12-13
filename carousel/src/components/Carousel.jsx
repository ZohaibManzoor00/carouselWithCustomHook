import useCarousel from '../useCarousel';

function Carousel({ arrOfItems, component: Component }) {
  const { curItem, moveCarousel } = useCarousel(arrOfItems);

  return (
    <div>
      <Component {...curItem} />
      <div className="carouselButtons">
        <button
          className="carouselBtn"
          onClick={(e) => moveCarousel(e, "prev")}
        >
          Previous
        </button>
        <button
          className="carouselBtn"
          onClick={(e) => moveCarousel(e, "rand")}
        >
          Random
        </button>
        <button
          className="carouselBtn"
          onClick={(e) => moveCarousel(e, "next")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel