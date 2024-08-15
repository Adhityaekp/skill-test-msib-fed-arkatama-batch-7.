"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../features/store";
import { fetchPortfolios } from "../../features/portfolioSlice";

const PortfolioComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolios = useSelector((state: RootState) => state.portfolio.data);
  const status = useSelector((state: RootState) => state.portfolio.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPortfolios());
    }
  }, [dispatch, status]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" &&
        portfolios.map((portfolio) => (
          <div key={portfolio.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{portfolio.title}</h3>
            <p className="mt-2 text-gray-700">{portfolio.description}</p>
          </div>
        ))}
      {status === "failed" && <p>Error loading portfolios.</p>}
    </div>
  );
};

export default PortfolioComponent;
