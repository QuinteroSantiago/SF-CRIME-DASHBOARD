
import '../../App.css';
import HeroSection from '../HeroSection';
import AverageCrimeTrend from '../AverageCrimeTrend';
import DistrictRank from '../DistrictRank';
import CrimeByDay from '../CrimeByDay';
import CrimeTimesRanked from '../CrimeTimesRanked';
import AverageCrimeResolution from '../AverageCrimeResolution';
import DistrictComparison from '../DistrictComparison';
import CrimeComparison from '../CrimeComparison';

function Home() {
    return (
        <>
            <HeroSection />
            <AverageCrimeTrend />
            <DistrictRank />
            <CrimeByDay />
            <CrimeTimesRanked />
            <AverageCrimeResolution />
            <DistrictComparison />
            <CrimeComparison />
        </>
    );
}

export default Home;