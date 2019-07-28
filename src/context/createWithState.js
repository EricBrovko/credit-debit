// @flow
import React, { type ComponentType, type Node as ReactNode } from "react";

type ConsumerProps = {
  children: (state: *) => ReactNode
};

const createWithState = (
  statePropName: string,
  Consumer: ComponentType<ConsumerProps>
) => (mapStateToProps?: (state: *, ownProps: *) => Object) =>
    (Component: ComponentType<*>) => class extends React.PureComponent<*> {
      renderConsumer = (state: *) => {
        const finalProps = {
          ...this.props,
          ...(typeof mapStateToProps === "function"
            ? mapStateToProps(state, this.props)
            : { [statePropName]: state })
        };

        return <Component {...finalProps} />;
      };

      render() {
        return (
          <Consumer>
            {this.renderConsumer}
          </Consumer>
        );
      }
    };

export default createWithState;
