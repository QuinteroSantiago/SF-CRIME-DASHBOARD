import '../../App.css';
import pagePadding from "./pages.css"
import CrimeComparison from '../CrimeComparison';
import AverageCrimeTrend from '../AverageCrimeTrend';

function CrimeCategorization() {
    return (
        <div className="pagePadding">
            <CrimeComparison />
            <AverageCrimeTrend />
        </div>
    );
}

export default CrimeCategorization;