import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function NetworkProviderStatus(): JSX.Element | null {
  const networkState = useSelector((state: any) => state.network);
  
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setIsConnected(networkState.providerConnected);
  }, [networkState])

  return (
    <div style={{ display: "flex", alignContent: "space-between", alignItems: "center", float: "right", padding: "20px", position: "fixed", bottom: "10px" }}>
        
        {
            isConnected ? 
              <>
                <div style={{ width: "8px", height: "8px", backgroundColor: "rgb(61, 213, 152)", borderRadius: "50%", marginRight: "0.5rem" }}></div>
                <div style={{ color: "rgb(61, 213, 152)", fontSize: "14px" }}>Connected</div> 
              </>
            : 
              <>
                <div style={{ width: "8px", height: "8px", backgroundColor: "red", borderRadius: "50%", marginRight: "0.5rem" }}></div>
                <div style={{ color: "red", fontSize: "14px" }}>Disconnected</div>
              </>
        }
    </div>
  );
}

export default NetworkProviderStatus;