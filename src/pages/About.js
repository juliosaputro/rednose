import React from 'react'
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import AboutContent from '../components/AboutContent';
import GrowSection from '../components/GrowSection';
import FinishSection from '../components/FinishSection';
import ContactBanner from '../components/ContactBanner';
import TeamSection from '../components/TeamSection';
import DonorsSection from '../components/DonorsSection';
import Visi from '../components/Visi';


export default function About() {
    return (
        <div>
            <Header />
            <NewsSection />
            <AboutContent />
            <GrowSection />
            <FinishSection />
            <TeamSection />
            <Visi />
            <DonorsSection />
            <ContactBanner />
        </div>
    )
}
