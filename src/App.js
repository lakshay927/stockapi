import "./styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchStocks } from "./redux/actions/stocks";
import { useEffect } from "react";
import Card from "./components/InvestmentCard";
import Graph from "./components/Graph";

import MarketValueCard from "./components/MarketValueCard";
import BuySellCard from "./components/BuySellCard";
import ReturnCard from "./components/ReturnCard";
import HeaderInfo from "./components/HeaderInfo";

function App() {
  let stocksData = [];
  const dispatch = useDispatch();
  const stocks = useSelector((state) => {
    return state;
  });

  stocksData = stocks.stocks.allStocks.stocks;

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-container">
          {!stocksData ? (
            <div>please wait....</div>
          ) : (
            stocksData.map((info, key) => {
              let marketValue = info.Quantity * info.Price;
              return (
                <div key={key} className="App-content">
                  <HeaderInfo info={info} />
                  <Card
                    quantity={info.Quantity}
                    avgCost={info.AvgCost}
                    investedAmount={info.InvestedAmount}
                  />
                  <MarketValueCard
                    marketValue={marketValue}
                    portfolioValue={info.PortfolioValue}
                  />
                  <ReturnCard PL={info.UnrealizedPL} return={info.Return} />
                  <BuySellCard />
                </div>
              );
            })
          )}
        </div>
        <div>
          <Graph data={stocksData} />
        </div>
      </div>
    </div>
  );
}

export default App;
