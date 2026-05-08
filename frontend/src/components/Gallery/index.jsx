import Hero from './Hero';
import FeaturedSlider from './FeaturedSlider';
import TeamGallery from './TeamGallery';
import MasonryGrid from './MasonryGrid';

const GalleryPage = () => {
    return (
        <div className="bg-background min-h-screen">
            <Hero />
            <FeaturedSlider />
            <TeamGallery />
            <MasonryGrid />
        </div>
    );
};

export default GalleryPage;
