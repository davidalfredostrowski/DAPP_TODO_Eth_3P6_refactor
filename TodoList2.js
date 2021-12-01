//import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'

import React, { Component } from "react";
import TestForm3 from './TestForm3'

class TodoList extends Component {
	state = {
		todos: []
	};
state2 = { data : this.props.createTask } 



handleSubmit(event){
//this.addTodo();
var data = JSON.stringify(this.state.todos)
alert("data");
alert(data);
this.props.createTask(data)
//    e.preventDefault();
    alert('it works!');
  }



//state = { data : this.props.dataFromParent } 
addTodo = todo => {
	this.setState({

		todos: [todo, ...this.state.todos]
	
	});
this.handleSubmit();
var data = JSON.stringify(this.state.todos)
//console.log("add3","hey i am in the addTodo")
console.log("data", data )

//console.log("add4", this.state.todos.text)

this.props.createTask("inside TODO2")

this.props.createTask(data)
//this.props.createTask(this.state.todos.text)
//console.log("add1","hey i am in the addTodo")
//console.log("add2", this.state.todos)

};


	render() {
		return ( 
<div id="content">		   
	    <TestForm3 createTaskP = {this.state2.data}   />
            { JSON.stringify(this.state.todos) }


            <ul id="taskList" className="list-unstyled">
		<label> task 1</label>
		<label> task 2</label>
		<label> task e</label>
            </ul>

	<button onClick={() =>this.props.createTask("kaboom!") }>Click tochange title</button>
           <ul id="taskList" className="list-unstyled">
		{ this.props.tasks.map((task, key) => {
		  return(
		  <div className="taskTemplate" className="checkbox" key={key}>
		    <label>
		    	<input type="checkbox"/>
			<span className="content">{task.content}</span>
		    </label>
                  </div>             
  		)
	})
}
            </ul>
            <ul id="completedTaskList" className="list-unstyled">
            </ul>     
</div>
		);
	}
}

export default TodoList;
