import { Helmet } from "react-helmet";
import StatisticBanner from "../components/StatisticBanner";


const Statistics = () => {
    return (
        <div>
            <StatisticBanner>
            
            </StatisticBanner>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics - Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Statistics;