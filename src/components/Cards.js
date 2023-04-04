import React, { Component } from "react";

// Component for Card item
class Cards extends Component {

    render(){

        return (
          
            
            <div className="card" id={this.props.index}>
                <div className="card-header">
                    <h3>{ this.props.task.title }</h3>
                    <span className={`badge badge-pill 
                    ${this.props.task.priority === "1" ? 'badge-info' : ''}
                    ${this.props.task.priority === "2" ? 'badge-warning' : ''}
                    ${this.props.task.priority === "3" ? 'badge-danger' : ''}`}
                    >
                        {this.props.task.priority === "1" ? 'low' : '' }
                        {this.props.task.priority === "2" ? 'medium' : '' }
                        {this.props.task.priority === "3" ? 'high' : '' }
                    </span>
                </div>
                <div className="card-body">
                    <p>{ this.props.task.description }</p>
                    <p><mark>{ this.props.task.responsible }</mark></p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.props.onRemoveTodo}>
                    Delete
                    </button>
                </div>
            </div>
            
          
        )
    }
}

export default Cards;