import { Helmet } from "react-helmet";
import StatisticBanner from "../components/StatisticBanner";
import Graph from "../components/Graph";


const Statistics = () => {
    return (
        <div>
            <StatisticBanner> </StatisticBanner>

            <Graph></Graph>
            
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics - Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Statistics;