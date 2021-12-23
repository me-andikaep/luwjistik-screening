import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInput2 from '../components/form/FormInput2';
import Loading from '../components/loading/Loading';
import { PostOrderList } from '../services/orderServices';
import { AddOrderValidation } from '../components/validations/AddOrderValidation';
import { OnWarning, OnError, OnSuccess } from '../components/toast';
import { useForm } from '../hooks/useForm';
import lodash from 'lodash';
import { AddOrderParseBody } from '../components/parsing/AddOrderParseBody';

const OrderAdd = (props) => {
	const dispatch = useDispatch();
	const orderState = useSelector((state) => state?.order);


	const validation = AddOrderValidation.validations;

	const { handleSubmit, handleChange, data, errors } = useForm({
		validations: validation,
		onSubmit: () => {
			const body = AddOrderParseBody(data);
			PostOrderList(body, dispatch)
				.then((res) => {
					if (res) {
						OnSuccess({ text: 'Order Created.' });
						props.history.replace('/order');
					}
				})
				.catch((error) => {
					OnError({ text: error.message });
				});
		},
		initialValues: {
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
		},
	});

	useEffect(() => {
		if (lodash.isEmpty(errors) === false) {
			OnWarning({ text: 'Please check your input form' });
		}
	}, [errors]);

	return (
		<div className='content'>
			<Loading showLoading={orderState.loading} text={'Saving...'} />

			<div className='header-content'>Add Order</div>

			<form className='c-add-order-form' onSubmit={handleSubmit}>
				<div className='add-order-form'>
					<div className='section-flow'>
						<div className='section-form'>
							<div className='form-group'>
								<FormInput2
									type='text'
									name='consignee_name'
									placeholder='Consignee Name *'
									value={data.consignee_name || ''}
									onChange={handleChange('consignee_name')}
									required
									isError={errors.consignee_name ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Number */**'
									value={data.consignee_number || ''}
									onChange={handleChange('consignee_number')}
									required
									isError={errors.consignee_number ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Address *'
									value={data.consignee_address || ''}
									onChange={handleChange('consignee_address')}
									required
									isError={errors.consignee_address ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Postal */**'
									value={data.consignee_postal || ''}
									onChange={handleChange('consignee_postal')}
									required
									isError={errors.consignee_postal ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Country *'
									value={data.consignee_country || ''}
									onChange={handleChange('consignee_country')}
									required
									isError={errors.consignee_country ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee City *'
									value={data.consignee_city || ''}
									onChange={handleChange('consignee_city')}
									required
									isError={errors.consignee_city ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee State *'
									value={data.consignee_state || ''}
									onChange={handleChange('consignee_state')}
									required
									isError={errors.consignee_state ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Consignee Province *'
									value={data.consignee_province || ''}
									onChange={handleChange('consignee_province')}
									required
									isError={errors.consignee_province ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='email'
									placeholder='Consignee Email'
									value={data.consignee_email || ''}
									onChange={handleChange('consignee_email')}
									// isError={errors.consignee_email ? true : false}
								/>
								{/* {errors.consignee_email && (
									<span className='info-form'>{errors.consignee_email}</span>
								)} */}
							</div>
						</div>
						<div className='section-form'>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Contact Name *'
									value={data.pickup_contact_name || ''}
									onChange={handleChange('pickup_contact_name')}
									required
									isError={errors.pickup_contact_name ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Contact Number */**'
									value={data.pickup_contact_number || ''}
									onChange={handleChange('pickup_contact_number')}
									required
									isError={errors.pickup_contact_number ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Address *'
									value={data.pickup_address || ''}
									onChange={handleChange('pickup_address')}
									required
									isError={errors.pickup_address ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Postal */**'
									value={data.pickup_postal || ''}
									onChange={handleChange('pickup_postal')}
									required
									isError={errors.pickup_postal ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Country *'
									value={data.pickup_country || ''}
									onChange={handleChange('pickup_country')}
									required
									isError={errors.pickup_country ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup City *'
									value={data.pickup_city || ''}
									onChange={handleChange('pickup_city')}
									required
									isError={errors.pickup_city ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup State *'
									value={data.pickup_state || ''}
									onChange={handleChange('pickup_state')}
									required
									isError={errors.pickup_state ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Pickup Province *'
									value={data.pickup_province || ''}
									onChange={handleChange('pickup_province')}
									required
									isError={errors.pickup_province ? true : false}
								/>
							</div>
							<div className='form-group'>
								<FormInput2
									type='text'
									placeholder='Payment Type'
									value={data.payment_type || ''}
									onChange={handleChange('payment_type')}
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
										onChange={handleChange('length')}
									/>
								</div>
								<div className='form-group'>
									<FormInput2
										type='text'
										placeholder='Width'
										value={data.width || ''}
										onChange={handleChange('width')}
									/>
								</div>
							</div>
							<div className='section-form'>
								<div className='form-group'>
									<FormInput2
										type='text'
										placeholder='Height'
										value={data.height || ''}
										onChange={handleChange('height')}
									/>
								</div>
								<div className='form-group'>
									<FormInput2
										type='text'
										placeholder='Weight'
										value={data.weight || ''}
										onChange={handleChange('weight')}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='section-info'>* Required fields || **Number Only</div>

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
