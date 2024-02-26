"use client"
import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget = memo(() => {
  const container = useRef(null);
  const widgetCreated = useRef(false);

  useEffect(() => {
    const cleanupPreviousContent = () => {
      // Clear the content of the container
      if (container.current) {
        container.current.innerHTML = '';
      }
    };

    // Check if the code is running on the client-side
    if (typeof window !== 'undefined' && !widgetCreated.current) {
      cleanupPreviousContent();
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "COINBASE:BTCUSD",
          "interval": "1",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "hide_legend": true,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);

      // Cleanup function when the component is unmounted or dependencies change
      return () => {
        cleanupPreviousContent();
      };
    }
  }, []);

  return (
    <div className=' h-[500px]'>
      <div className="tradingview-widget-container" ref={container} id='blockelement' style={{ height: "600px", width: "100%", background:"black" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "500px", objectFit:"cover", width: "100%" }}></div>
      </div>
    </div>
  );
});

TradingViewWidget.displayName = 'TradingViewWidget';

export default TradingViewWidget;
