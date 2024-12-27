import { Banner } from '../components/Banner';
import { Features } from '../components/Features';

export function HomePage() {
  return (
    <div>
      <div className='px-10 py-4'>
      <Banner />
      </div>
      <Features />
    </div>
  );
}