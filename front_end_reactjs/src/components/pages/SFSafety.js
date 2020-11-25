import '../../App.css';
import pagePadding from "./pages.css"
import DistrictRank from '../DistrictRank';
import DistrictComparison from '../DistrictComparison';

function SFSafety() {
    return (
        <div className="pagePadding">
            <DistrictRank />
            <DistrictComparison />
        </div>
    );
}

export default SFSafety;