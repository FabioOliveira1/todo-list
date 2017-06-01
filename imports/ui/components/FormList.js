// Meteor
import { Meteor } from 'meteor/meteor';
// React Package
import React, { Component } from 'react';

export default class FormList extends Component{
	constructor(){
		super();

		this.state = {
				name: "",
				date: "",
				itemName: "",
				items: [],
				group: "",
				color: "#9e9e9e"
		}
	}

	componentDidMount(){
		componentHandler.upgradeDom();

		if(this.props.list)
			this.setState({...this.props.list});
	}

	//Handlers
	handleListNameChange(e){
		this.setState({
			name: e.target.value
		});
	}
	handleGroupChange(e){
		if(e.target.value != "")
			this.setState({
				group: this.props.groups[e.target.value]._id,
				color: this.props.groups[e.target.value].color
			});
		else
			this.setState({
				group: "",
				color: "#9e9e9e"
			});
	}
	handleItemNameChange(e){
		this.setState({
			itemName: e.target.value
		});
	}

	//Items actions
	addItem(){
		if(this.state.itemName != ""){
			let items = this.state.items;
			let item = {_id: Date.now().toString(16), name: this.state.itemName, done: false};
			items.push(item);
			this.setState({
				items,
				itemName: ""
			});
		}
	}

	render(){
		return (
			<div className="demo-card-wide mdl-card mdl-shadow--2dp">
				<div className="mdl-card__title">
					<h2 className="mdl-card__title-text">Fomulário de listas</h2>
				</div>
				<form id="form-list" className="mdl-card__supporting-text" onSubmit={(e)=>{e.preventDefault();}}>
					<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<input
							className="mdl-textfield__input"
							type="text"
							id="form-list-ńame"
							required
							value={this.state.name}
							onChange={(e)=>{this.handleListNameChange(e);}}
						/>
						<label className="mdl-textfield__label" htmlFor="form-list-ńame">Título da lista</label>
					</div>
					<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<select
							onChange={(e)=>{this.handleGroupChange(e);}}
							className="mdl-textfield__input"
							id="select-group"
							required
						>
							<option value="">Selecione um grupo</option>
							{this.props.groups.map((group, i)=>(
								<option key={group._id} value={i} color={group.color}>{group.name}</option>
							))}
						</select>
						<label className="mdl-textfield__label" htmlFor="select-group"></label>
					</div>
					<div className="form-list__input-button">
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input
									className="mdl-textfield__input"
									type="text"
									id="form-itens-name"
									value={this.state.itemName}
									onChange={(e)=>{this.handleItemNameChange(e);}}
								/>
							<label className="mdl-textfield__label" htmlFor="form-itens-name">Adicionar itens</label>
						</div>
						<div className="form-list__button-container">
							<div className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
								onClick={()=>{this.addItem();}}
							>
						 		<i className="material-icons">add</i>
							</div>
						</div>
					</div>

				</form>
				<div className="mdl-card__menu">
					<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
						<i className="material-icons">share</i>
					</button>
				</div>

				<hr className="standard-divider"/>

				<div className="mdl-card__title">
					<h2 className="mdl-card__title-text">Preview</h2>
				</div>
				<div className="list__card preview__card">
					<div className="demo-card-wide mdl-card mdl-shadow--2dp">
						<div className="mdl-card__title" style={{backgroundColor: this.state.color}}>
							<h2 className="mdl-card__title-text">{this.state.name}</h2>
						</div>
						<div className="demo-list-action mdl-list">
							{this.state.items.map((item)=>(
								<div key={item._id} className="mdl-list__item">
									<span className="mdl-list__item-primary-content">
									<span className={(item.done) ? "mdl-list__item-done" : ""}>{item.name}</span>
									</span>
									<div className="mdl-list__item-secondary-action">
										<i className={`${(item.done) ? "mdl-list__item-done " : ""} material-icons`}>{(item.done) ? "check_box" : "check_box_outline_blank"}</i>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<hr className="standard-divider"/>

				<div className="mdl-card__actions">
					<button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" form="form-list">
						{(this.props.list) ? "ATUALIZAR" : "ADICIONAR"}
					</button>
				</div>
			</div>

		)
	}

}