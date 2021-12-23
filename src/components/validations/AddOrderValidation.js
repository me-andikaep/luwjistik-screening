// var patternEmail = new RegExp(
// 	/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
// );

export const AddOrderValidation = {
	validations: {
		// consignee_name: {
		// 	required: {
		// 		value: true,
		// 		message: 'Required',
		// 	},
		// },
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
