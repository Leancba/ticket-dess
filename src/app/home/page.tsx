'use client';
import './styles.css';
import Carrousel from '@/components/carrousel';
import EventSection from '@/sections/events';
import SocialLinksSection from '@/sections/social/SocialLinksSection';

export default function HomePage() {
  return (
    <div>
      <Carrousel/>
      <EventSection/>
      {/* <NewsletterSection/> */}
      <SocialLinksSection/>
      {/* <BannerSection/> */}
    </div>
  );
}
