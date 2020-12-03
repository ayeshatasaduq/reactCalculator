import React, { Component } from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <table  style={{ border: "1px solid black"   }}>
                    <tr>
                        <th><button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button></th>
                        <th><button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button></th>
                        <th><button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button></th>
                        <th><button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br /></th>
                    </tr>

                    <tr>
                        <th><button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button></th>
                        <th> <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button></th>
                        <th> <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button></th>
                        <th><button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br /></th>
                    </tr>

                    <tr>
                        <th><button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button></th>
                        <th><button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button></th>
                        <th><button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button></th>
                        <th><button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br /></th>
                    </tr>

                    <tr>
                        <th> <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button></th>
                        <th>  <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button></th>
                        <th>   <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button></th>
                        <th>   <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br /></th>
                    </tr>

                    <tr>
                        <th> <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button></th>
                        <th> <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button></th>
                        <th> <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button></th>
                        <th><button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button><br /></th>
                    </tr>
                </table>
            </div>
        );
    }
}


export default KeyPadComponent;