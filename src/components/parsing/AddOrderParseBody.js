export const AddOrderParseBody = (body) => {
	const newBody = {
		consignee_name: body.consignee_name,
		consignee_number: body.consignee_number,
		consignee_address: body.consignee_address,
		consignee_postal: body.consignee_postal,
		consignee_country: body.consignee_country,
		consignee_city: body.consignee_city,
		consignee_state: body.consignee_state,
		consignee_province: body.consignee_province,
		consignee_email: body.consignee_email,
		length: parseInt(body.length),
		width: parseInt(body.width),
		height: parseInt(body.height),
		weight: parseInt(body.weight),
		payment_type: body.payment_type,
		pickup_contact_name: body.pickup_contact_name,
		pickup_contact_number: body.pickup_contact_number,
		pickup_address: body.pickup_address,
		pickup_postal: body.pickup_postal,
		pickup_country: body.pickup_country,
		pickup_city: body.pickup_city,
		pickup_state: body.pickup_state,
		pickup_province: body.pickup_province,
	};

	return newBody;
};
