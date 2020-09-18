import React from "react";
import styled from "styled-components";

const Styles = styled.div`
	.header-container {
		background-image: url("https://images.squarespace-cdn.com/content/v1/5b7461ad12b13f23b4f3d005/1534452360040-8MUY71HUYPCM5LE2D68J/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/061317-V-Pizza-42.jpg?format=2500w");
	}

	h1 {
		font-size: 50px;
		color: red;
		margin-left: 40%;
	}

	p {
		font-size: 50px;
		color: red;
		margin-left: 33%;
	}

	img {
		width: 900px;
		height: 700px;
		margin-left: 2%;
		margin-bottom: 2%;
		border: 8px solid red;
	}

	.pizza-container {
		margin-left: 5%;
		margin-bottom: 2%;
	}
`;

export const Home = () => (
	<div className="header-container">
		<Styles>
			<h1>Winnie's Pizzeria</h1>
			<div className="pizza-container">
				<img
					src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DYYVE0V_d"
					alt="pizza1"
				/>
				<img
					src="https://res.cloudinary.com/droz/image/upload/v1558317957/prod-store/gallery/slides/Hawaiian-pizza-pie-pineapple-720.jpg"
					alt="pizza2"
				/>
				<img
					src="https://www.seriouseats.com/recipes/images/2015/01/20150109-meatball-pizza-small-balls-8.jpg"
					alt="pizza3"
				/>
				<img
					src="https://www.kingarthurbaking.com/sites/default/files/2019-12/stuffed-pizza.jpg"
					alt="pizza4"
				/>
			</div>
			<p>Where DelightFul Comes To You!</p>
		</Styles>
	</div>
);
