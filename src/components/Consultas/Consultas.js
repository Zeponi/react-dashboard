import React, { Componet } from "react";

class Consultas extends Component {
	constructor(props){
		super(props);
		this.state = {
			realizadas : [],
			marcadas : []
		};
	}

	componentDidMount(){
		fetch("http://projeto.devmedia.com.br/php/api-dashboard/api/consultas")
		.then(resultado => resultado.json().then(dados => this.setState(dados)));
	}

	render() {
		return (
			<div>
			</div>
		)
	}

}