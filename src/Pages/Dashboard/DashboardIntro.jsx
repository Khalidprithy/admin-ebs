import HeroCard from '../../components/HeroCard';
import RatingPreview from '../../components/RatingPreview';

export default function DashboardIntro() {
   return (
      <div className='mx-2 flex flex-col lg:flex-row gap-4'>
         <HeroCard />
         <RatingPreview />
      </div>
   );
}
