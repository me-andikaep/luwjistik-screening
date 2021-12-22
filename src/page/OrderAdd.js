import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import FormInput from '../components/form/FormInput';
import FormInput2 from '../components/form/FormInput2';
import Loading from '../components/loading/Loading';
import { PostOrderList } from '../services/orderServices';

const OrderAdd = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [data, setData] = useState({
		consignee_name: '',
		consignee_number: '',
		consignee_address: '',
		consignee_postal: '',
		consignee_country: '',
		consignee_city: '',
		consignee_state: '',
		consignee_province: '',
		consignee_email: '',
		length: 0,
		width: 0,
		height: 0,
		weight: 0,
		payment_type: '',
		pickup_contact_name: '',
		pickup_contact_number: '',
		pickup_address: '',
		pickup_postal: '',
		pickup_country: '',
		pickup_city: '',
		pickup_state: '',
		pickup_province: '',
	});

	const dispatch = useDispatch();
	const orderState = useSelector((state) => state?.order);

	// console.log('authState', authState);

	const onSuccess = (e) => {
		e.preventDefault();

		const body = {
			consignee_name: data.consignee_name,
			consignee_number: data.consignee_number,
			consignee_address: data.consignee_address,
			consignee_postal: data.consignee_postal,
			consignee_country: data.consignee_country,
			consignee_city: data.consignee_city,
			consignee_state: data.consignee_state,
			consignee_province: data.consignee_province,
			consignee_email: data.consignee_email,
			length: parseInt(data.length),
			width: parseInt(data.width),
			height: parseInt(data.height),
			weight: parseInt(data.weight),
			payment_type: data.payment_type,
			pickup_contact_name: data.pickup_contact_name,
			pickup_contact_number: data.pickup_contact_number,
			pickup_address: data.pickup_address,
			pickup_postal: data.pickup_postal,
			pickup_country: data.pickup_country,
			pickup_city: data.pickup_city,
			pickup_state: data.pickup_state,
			pickup_province: data.pickup_province,
		};

		console.log('bodynya ', body);
		// PostOrderList()
	};

	return (
		<div className='content'>
			<Loading showLoading={isLoading} text={'Saving...'} />

			<div className='header-content'>Add Order</div>

			<form className='c-add-order-form' onSubmit={onSuccess}>
				<div className='add-order-form'>
					<div className='section-flow'>
						<div className='section-form'>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Name'
									value={data.consignee_name || ''}
									onChange={(e) =>
										setData({ ...data, consignee_name: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Number'
									value={data.consignee_number || ''}
									onChange={(e) =>
										setData({ ...data, consignee_number: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Address'
									value={data.consignee_address || ''}
									onChange={(e) =>
										setData({ ...data, consignee_address: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Postal'
									value={data.consignee_postal || ''}
									onChange={(e) =>
										setData({ ...data, consignee_postal: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Country'
									value={data.consignee_country || ''}
									onChange={(e) =>
										setData({ ...data, consignee_country: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee City'
									value={data.consignee_city || ''}
									onChange={(e) =>
										setData({ ...data, consignee_city: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee State'
									value={data.consignee_state || ''}
									onChange={(e) =>
										setData({ ...data, consignee_state: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Province'
									value={data.consignee_province || ''}
									onChange={(e) =>
										setData({ ...data, consignee_province: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Email'
									value={data.consignee_email || ''}
									onChange={(e) =>
										setData({ ...data, consignee_email: e.target.value })
									}
								/>
							</div>
						</div>
						<div className='section-form'>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Contact Name'
									value={data.pickup_contact_name || ''}
									onChange={(e) =>
										setData({ ...data, pickup_contact_name: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Contact Number'
									value={data.pickup_contact_number || ''}
									onChange={(e) =>
										setData({ ...data, pickup_contact_number: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Address'
									value={data.pickup_address || ''}
									onChange={(e) =>
										setData({ ...data, pickup_address: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Postal'
									value={data.pickup_postal || ''}
									onChange={(e) =>
										setData({ ...data, pickup_postal: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Country'
									value={data.pickup_country || ''}
									onChange={(e) =>
										setData({ ...data, pickup_country: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup City'
									value={data.pickup_city || ''}
									onChange={(e) =>
										setData({ ...data, pickup_city: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup State'
									value={data.pickup_state || ''}
									onChange={(e) =>
										setData({ ...data, pickup_state: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Province'
									value={data.pickup_province || ''}
									onChange={(e) =>
										setData({ ...data, pickup_province: e.target.value })
									}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Payment Type'
									value={data.payment_type || ''}
									onChange={(e) =>
										setData({ ...data, payment_type: e.target.value })
									}
								/>
							</div>
						</div>
					</div>
					<div className='section-card'>
						<div className='title-section-card'>Dimension</div>
						<div className='section-flow'>
							<div className='section-form'>
								<div className='form-group'>
									<FormInput2
										type='text'
										placeholder='Length'
										value={data.length || ''}
										onChange={(e) =>
											setData({ ...data, length: e.target.value })
										}
									/>
								</div>
								<div className='form-group'>
									<FormInput2
										type='text'
										placeholder='Width'
										value={data.width || ''}
										onChange={(e) =>
											setData({ ...data, width: e.target.value })
										}
									/>
								</div>
							</div>
							<div className='section-form'>
								<div className='form-group'>
									<FormInput2
										type='text'
										placeholder='Height'
										value={data.height || ''}
										onChange={(e) =>
											setData({ ...data, height: e.target.value })
										}
									/>
								</div>
								<div className='form-group'>
									<FormInput2
										type='text'
										placeholder='Weight'
										value={data.weight || ''}
										onChange={(e) =>
											setData({ ...data, weight: e.target.value })
										}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='section-action'>
						<button className='btn-save' type='submit'>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default OrderAdd;
