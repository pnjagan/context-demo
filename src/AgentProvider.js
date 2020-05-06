import React from "react";
export const AgentContext = React.createContext();

export class AgentProvider extends React.Component {
  state = {
    sales: [],
  };

  render() {
    return (
      <AgentContext.Provider
        value={{
          sales: this.state.sales,
          addSales: (carNum) => {
            const sales = Object.assign([], this.state.sales);
            sales[carNum] = sales[carNum] == null ? 1 : sales[carNum] + 1;
            this.setState({
              sales,
            });
          },
        }}
      >
        {this.props.children}
      </AgentContext.Provider>
    );
  }
}
