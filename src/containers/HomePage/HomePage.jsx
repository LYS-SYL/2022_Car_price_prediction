import API from '@api/';
import { numberWithCommas } from '@utils/';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form } from 'reactstrap';
import FormField from './FormField';
import PacmanLoader from 'react-spinners/PacmanLoader'
import { MAX_TOAST_NOTI } from '@constants/';

export default function HomePage() {
	const [price, setPrice] = useState(0);
	const [loading, setLoading] = useState(false);
	const _submit = e => {
		e.preventDefault();
		const fieldData = [
			"brand_name", "model", "car_year", "fuel", "origin",
			"region", "gear", "car_color", "car_seats",
			"status", "car_mileage", "style"];
		const data = {};
		fieldData.forEach(f => {
			data[f] = e.target[f].value
		});
		// validate
		try {
			const validateNumber = [
				["car_year", "year"],
				["car_seats", "number of seats"],
				["car_mileage", "milage"]
			];
			const validateRequiredText = [
				["brand_name", "brand name"],
				["model", "model name"],
				["style", "style"],
				["origin", "origin"],
				["region", "region_name"],
				["gear", "type of gear"],
				["fuel", "type of fuel"],
				["car_color", "color"],
				["status", "status"],
			];
			let error = false;
			let n_error = 0;
			validateRequiredText.forEach((f) => {
				if (data[f[0]].length === 0) {
					error = true;
					n_error++;
					if (n_error <= MAX_TOAST_NOTI)
						toast.error("Missing " + f[1]);
				}
			})

			validateNumber.forEach((f) => {
				if (data[f[0]].length === 0) {
					error = true;
					n_error++;
					if (n_error <= MAX_TOAST_NOTI)
						toast.error("Missing " + f[1]);
				} else {
					data[f[0]] = +data[f[0]];
				}
			});

			if (!error) {
				setLoading(true);
				API.predictCarPrice(data).then(d => {
					setPrice(d?.car_price)
				}).catch(err => {
					toast.error(err.message || err || "Something was wrong!!");
				}).finally(() => {
					setLoading(false);
				})
			}

		} catch (err) {
			console.log(err)
			toast.error(err.message || "Unknown error on validating input. Try again");
		}

		console.log(data)
	}

	const _renderPrice = () => (
		price ? (
			<div id="result">
				<span>{numberWithCommas(price)}</span>
				<span> VNĐ</span>
			</div>
		) : (
			<div id="input_required">. . .</div>
		)
	)

	return (
		<Form method="POST" className="HomePage" onSubmit={_submit}>
			<div className="HomePage__left">
				<div className='heading'>
					<h2 className='no-select'>Input car information:</h2>
					<div className="submit-area">
						<Button disabled={loading} type="submit">Submit</Button>
					</div>

				</div>
				<FormField />
			</div>
			<div className="HomePage__right" >
				<h2 className='no-select'>
					Car price predict:
				</h2>
				{
					loading ?
						<div className="pacman-loading">
							<PacmanLoader color='salmon' />
						</div> : _renderPrice()
				}
			</div>
		</Form>
	);
}
