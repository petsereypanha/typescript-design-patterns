import React, { HTMLAttributes } from "react";

type ButtonProps = Pick<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'className' | 'onFocus'>;

class LoggingButton extends React.Component<ButtonProps> {
    handleClick = () => {
        console.log("Button clicked!");
    };

    render() {
        return (
            <button
                onClick={this.handleClick}
                className={this.props.className}
                onFocus={this.props.onFocus}
            >
                Click Me
            </button>
        );
    }
}

export default LoggingButton;