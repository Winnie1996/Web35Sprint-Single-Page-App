import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

function Form() {
	const initialFormValues = {
		name: "",
		instructions: "",
		size: "",
		meatball: false,
		cheese: false,
		pepperoni: false,
		ham: false,
	};

	const initialFormErrors = {
		name: "",
		instructions: "",
		size: "",
		// meatball: "false",
		// cheese: "false",
		// pepperoni: "false",
		// ham: "false",
	};
	//starting off with blank slate of forms STEP 1

	//first forms that will come out

	const [form, setForm] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [post, setPost] = useState([]);
	const [buttonDisabled, setButtonDisabled] = useState(true);

	////////////////////////////Changes to State Here///////////////

	const inputChange = (name, value) => {
		validate(name, value);
		setForm({
			...form,
			[name]: value,
		});
	};

	const onChange = (event) => {
		const { name, value, type, checked } = event.target;
		const valueToUse = type === "checkbox" ? checked : value;
		inputChange(name, valueToUse);
	};

	///////////////////////////////////////////////////////////////////

	const newOrderSubmit = (newPizzaOrder) => {
		axios
			.post("https://reqres.in/api/orders", newPizzaOrder)
			.then((response) => {
				setPost([...post, response.data]);
				setForm(initialFormValues);
				// setFormErrors({initialFormValues});
			})
			.catch((error) => {
				debugger;
				console.log(error);
			})
			.finally(() => {});
	};
	/////////////////////////////////// FORM SUBMISSION ////////////////////////////////

	const formSubmit = () => {
		const newOrder = {
			name: form.name.trim(),
			instructions: form.instructions.trim(),
			size: form.size,

			toppings: ["meatball", "cheese", "pepperoni", "ham"].filter(
				(topping) => form[topping]
			),
		};
		console.log(newOrder);
		newOrderSubmit(newOrder);
	};

	const submitForm = (event) => {
		event.preventDefault();
		formSubmit();
	};
	/////////////////////////////////////////////////////////////////////////////////

	///////////////////////////////// FORMSCHEMA AND VALIDATION /////////////////////////

	const formSchema = yup.object().shape({
		name: yup
			.string()
			.min(2, "Name must be at least 2 characters long")
			.required("Name is required"),
		size: yup
			.string()
			.oneOf(["Small", "Medium", "Large"], "You must select a size")
			.required("Must pick size"),
		instructions: yup
			.string()
			.max(50, "Add Instructions if needed")
			.required("Add Instructions"),
		meatball: yup.boolean(),
		cheese: yup.boolean(),
		pepperoni: yup.boolean(),
		ham: yup.boolean(),
	});

	const validate = (name, value) => {
		yup
			.reach(formSchema, name)
			.validate(value)
			.then((valid) => {
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})
			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});
	};

	useEffect(() => {
		formSchema.isValid(form).then((isValid) => {
			setButtonDisabled(!isValid);
		});
	}, [form]);

	///////////////////////////////////////////////////////////////////////////
	return (
		<form onSubmit={submitForm}>
			<label htmlFor="name">
				Name:
				<input
					className="nameInstructions"
					id="name"
					type="text"
					name="name"
					placeholder="insert name here"
					value={form.name}
					onChange={onChange}
				/>
				{formErrors.name.length > 2 ? (
					<h4 className="error"> {formErrors.name}</h4>
				) : null}
			</label>

			{/* <br></br> */}

			<label htmlFor="instructions">
				Special Instructions:
				<input
					className="nameInstructions"
					id="instructions"
					type="text"
					name="instructions"
					placeholder="add instructions here"
					value={form.instructions}
					onChange={onChange}
				/>
			</label>

			<label htmlFor="size">
				<select id="size" name="size" onChange={onChange} value={form.size}>
					<option>-- Please Select Size --</option>
					<option>Small</option>
					<option>Medium</option>
					<option>Large</option>
				</select>
				{formErrors.size.length > 2 ? (
					<h4 className="error"> {formErrors.size}</h4>
				) : null}
				<br></br>

				<label htmlFor="meatball" className="toppings">
					<h2>Select Toppings Below:</h2>
					Meatball
					<input
						value="meatball"
						name="meatball"
						type="checkbox"
						checked={form.meatball}
						onChange={onChange}
					/>
					<br></br>
					<label htmlFor="cheese">
						Cheese
						<input
							value="cheese"
							name="cheese"
							type="checkbox"
							checked={form.cheese}
							onChange={onChange}
						/>
					</label>
					<br></br>
					<label htmlFor="pepperoni">
						Pepperoni
						<input
							value="pepperoni"
							name="pepperoni"
							type="checkbox"
							checked={form.pepperoni}
							onChange={onChange}
						/>
					</label>
					<br></br>
					<label htmlFor="ham">
						Ham
						<input
							id="ham"
							name="ham"
							type="checkbox"
							checked={form.ham}
							onChange={onChange}
						/>
					</label>
				</label>
			</label>

			<button disabled={buttonDisabled} type="submit">
				Add To Order
			</button>
			<h3>Your Order</h3>
			{post.map((user) => {
				return (
					<ol>
						<h2>Name:</h2>
						<li>{user.name}</li>
						<h2>Special Instruction:</h2>
						<li>{user.instructions}</li>
						<h2>Pizza Size:</h2>
						<li>{user.size}</li>
						<h2>Topping Choices:</h2>
						{user.toppings.map((topping) => {
							return (
								<div>
									<p>{topping}</p>
								</div>
							);
						})}
					</ol>
				);
			})}
		</form>
	);
}

export default Form;
