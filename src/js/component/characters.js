import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starWarsLogo.png";

import { Context } from "../store/appContext";

export function Characters() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<h1>Characters</h1>
			<div className="tarjetas py-2 d-flex align-items-center">
				{store.characters.map((planet, index) => {
					return (
						<div key={index} className="mr-5">
							<div className="card my-1" style={{ width: "25rem" }}>
								<img src={starWarsLogo} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<Link to={"/details-characters/" + index}>
											<span className="btn btn-outline-light">Learn more!</span>
										</Link>
										<button
											onClick={() => {
												if (actions.isFav(index, "characters")) {
													actions.delFavorite(index, "characters");
												} else {
													actions.addFavorite(index, "characters");
												}
											}}
											type="button"
											className={`btn btn-outline-warning ${
												actions.isFav(index, "characters") ? "active" : ""
											}`}>
											<i className="fas fa-heart" />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}