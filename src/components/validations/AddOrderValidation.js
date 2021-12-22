var patternEmail = new RegExp(
	/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);

export const AddOrderValidation = {
	validations: {
		consignee_name: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		consignee_number: {
			required: {
				value: true,
				message: 'Required',
			},
			pattern: {
				value: '^[0-9]',
				message: 'Number Only',
			},
		},
		consignee_address: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		consignee_postal: {
			required: {
				value: true,
				message: 'Required',
			},
			pattern: {
				value: '^[0-9]',
				message: 'Number Only',
			},
		},
		consignee_country: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		consignee_city: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		consignee_state: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		consignee_province: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		// consignee_email: {
		// 	pattern: {
		// 		value: '' || patternEmail,
		// 		message: 'Format Email invalid',
		// 	},
		// },
		pickup_contact_name: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		pickup_contact_number: {
			required: {
				value: true,
				message: 'Required',
			},
			pattern: {
				value: '^[0-9]',
				message: 'Number Only',
			},
		},
		pickup_address: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		pickup_postal: {
			required: {
				value: true,
				message: 'Required',
			},
			pattern: {
				value: '^[0-9]',
				message: 'Number Only',
			},
		},
		pickup_country: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		pickup_city: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		pickup_state: {
			required: {
				value: true,
				message: 'Required',
			},
		},
		pickup_province: {
			required: {
				value: true,
				message: 'Required',
			},
		},
	},
};

// const validateForm = async (fields, errors, formIsValid) => {
// 	var patternEmail = new RegExp(
// 		/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
// 	);

// 	if (!fields['consignee_name']) {
// 		formIsValid = false;
// 		errors['consignee_name'] = '*Required.';
// 	}

// 	if (!fields['consignee_number']) {
// 		formIsValid = false;
// 		errors['consignee_number'] = '*Required.';
// 	} else if (typeof fields['consignee_number'] !== 'undefined') {
// 		if (!fields['consignee_number'].match(/^[0-9]/)) {
// 			formIsValid = false;
// 			errors['consignee_number'] = '*Number Only';
// 		}
// 	}

// 	if (!fields['consignee_address']) {
// 		formIsValid = false;
// 		errors['consignee_address'] = '*Required.';
// 	}

// 	if (!fields['consignee_postal']) {
// 		formIsValid = false;
// 		errors['consignee_postal'] = '*Required.';
// 	} else if (typeof fields['consignee_postal'] !== 'undefined') {
// 		if (!fields['consignee_postal'].match(/^[0-9]/)) {
// 			formIsValid = false;
// 			errors['consignee_postal'] = '*Number Only';
// 		}
// 	}

// 	if (!fields['consignee_country']) {
// 		formIsValid = false;
// 		errors['consignee_country'] = '*Required.';
// 	}

// 	if (!fields['consignee_city']) {
// 		formIsValid = false;
// 		errors['consignee_city'] = '*Required.';
// 	}

// 	if (!fields['consignee_state']) {
// 		formIsValid = false;
// 		errors['consignee_state'] = '*Required.';
// 	}

// 	if (!fields['consignee_province']) {
// 		formIsValid = false;
// 		errors['consignee_province'] = '*Required.';
// 	}

// 	if (typeof fields['consignee_email'] !== 'undefined') {
// 		if (!patternEmail.test(fields['consignee_email'])) {
// 			formIsValid = false;
// 			errors['consignee_email'] = '*Please enter valid Email.';
// 		}
// 	}

// 	if (!fields['pickup_contact_name']) {
// 		formIsValid = false;
// 		errors['pickup_contact_name'] = '*Required.';
// 	}

// 	if (!fields['pickup_contact_number']) {
// 		formIsValid = false;
// 		errors['pickup_contact_number'] = '*Required.';
// 	} else if (typeof fields['pickup_contact_number'] !== 'undefined') {
// 		if (!fields['pickup_contact_number'].match(/^[0-9]/)) {
// 			formIsValid = false;
// 			errors['pickup_contact_number'] = '*Number Only';
// 		}
// 	}

// 	if (!fields['pickup_address']) {
// 		formIsValid = false;
// 		errors['pickup_address'] = '*Required.';
// 	}

// 	if (!fields['pickup_postal']) {
// 		formIsValid = false;
// 		errors['pickup_postal'] = '*Required.';
// 	} else if (typeof fields['pickup_postal'] !== 'undefined') {
// 		if (!fields['pickup_postal'].match(/^[0-9]/)) {
// 			formIsValid = false;
// 			errors['pickup_postal'] = '*Number Only';
// 		}
// 	}

// 	if (!fields['pickup_country']) {
// 		formIsValid = false;
// 		errors['pickup_country'] = '*Required.';
// 	}

// 	if (!fields['pickup_city']) {
// 		formIsValid = false;
// 		errors['pickup_city'] = '*Required.';
// 	}

// 	if (!fields['pickup_state']) {
// 		formIsValid = false;
// 		errors['pickup_state'] = '*Required.';
// 	}

// 	if (!fields['pickup_province']) {
// 		formIsValid = false;
// 		errors['pickup_province'] = '*Required.';
// 	}

// 	return fields + errors + formIsValid;
// 	// return [fields, errors, formIsValid];
// };

// export default validateForm;
