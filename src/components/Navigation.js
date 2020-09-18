import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
	.navbar {
		background-color: #222;
		font-size: 25px;
	}
	a,
	.navbar-brand {
		display: flex;
		font-size: 25px;
		text-decoration: none;
		color: red;
		margin-left: 3%;
	}
	.navbar-nav .nav-link {
		color: #bbb;
		&:hover {
			color: white;
		}
	}
`;

export const Navigation = () => (
	<Styles>
		<Navbar.Brand href="/">Winnie's Pizzeria</Navbar.Brand>
		<Link to="/Pizza">Create a Pizza</Link>
	</Styles>
);
