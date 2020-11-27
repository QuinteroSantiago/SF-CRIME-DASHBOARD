import '../../App.css';
import CrimeByDay from '../CrimeByDay';
import CrimeTimesRanked from '../CrimeTimesRanked';

function SFTourism() {
    return (
        <div className="pagePadding">
            <CrimeByDay />
            <CrimeTimesRanked />
        </div>
    );
}

export default SFTourism;