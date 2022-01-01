import { CAR_STATUS } from '@constants/';
import { CAR_GEAR } from '@constants/';
import { CAR_FUEL } from '@constants/';
import { CAR_STYLES } from '@constants/';
import React from 'react';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
/**

 * origin
 * region
 * brand_name
 * model
 * car_year
 * style
 * status
 * car_color
 * car_seats
 * car_mileage
 * gear
 * fuel

 */
export default function FormField() {
    return (
        <div>

            <div className="row">
                <FormGroup className="col-6">
                    <Label for="input_brand_name">Brand name: </Label>
                    <Input type="text" name="brand_name" id="input_brand_name" placeholder="Input brand" />
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="input_model">Model: </Label>
                    <Input type="text" name="model" id="input_model" placeholder="Input model" />
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup className="col-6">
                    <Label for="input_year">Year: </Label>
                    <Input type="select" name="car_year" id="input_year" defaultValue={""}>
                        <option value={""} disabled>--Select year--</option>
                        {Array.from(new Array(2022 - 1950 + 1)).map((_, i) => <option key={i} value={2022 - 1950 - i + 1950}>{2022 - 1950 - i + 1950}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="input_style">Style: </Label>
                    <Input type="select" name="style" id="input_style" defaultValue={""} >
                        <option value="" disabled>--Select style--</option>
                        {CAR_STYLES.map((e, i) => <option key={i} value={e}>{e}</option>)}
                    </Input>
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup className="col-6">
                    <Label for="input_origin">Origin:</Label>
                    <Input type="text" name="origin" id="input_origin" placeholder="Input origin" />
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="input_region_name">Region: </Label>
                    <Input type="text" name="region" id="input_region_name" placeholder="Input region name" />
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup className="col-6">
                    <Label for="input_gear">Gear: </Label>
                    <Input type="select" name="gear" id="input_gear" defaultValue={""} >
                        <option value="" disabled>--Select gear--</option>
                        {CAR_GEAR.map((e, i) => <option key={i} value={e}>{e}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="input_fuel">Fuel: </Label>
                    <Input type="select" name="fuel" id="input_fuel" defaultValue={""} >
                        <option value="" disabled>--Select type of fuel--</option>
                        {CAR_FUEL.map((e, i) => <option key={i} value={e}>{e}</option>)}
                    </Input>
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup className="col-6">
                    <Label for="input_color">Color: </Label>
                    <Input type="text" name="car_color" id="input_color" placeholder="Color" />
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="input_car_seats">Seat: </Label>
                    <Input type="number" name="car_seats" id="input_car_seats" placeholder="Input number of seats" />
                </FormGroup>
            </div>
            <div className="row">
                <FormGroup className="col-6">
                    <Label for="input_status">Status: </Label>
                    <Input type="select" name="status" id="input_status" defaultValue={""}>
                        <option value="" disabled>--Select status--</option>
                        {CAR_STATUS.map((e, i) => <option key={i} value={e}>{e}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="input_car_mileage">Mile age: </Label>
                    <Input type="number" name="car_mileage" id="input_car_mileage" placeholder="Input mileage" />
                </FormGroup>
            </div>
    </div>)
}