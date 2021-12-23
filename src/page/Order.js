/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetOrderList } from '../services/orderServices';
import { OnError } from '../components/toast';
import ReactLoading from 'react-loading';

const Order = (props) => {
	const [data, setData] = useState([]);

	const nf = new Intl.NumberFormat();
	const dispatch = useDispatch();
	const orderState = useSelector((state) => state?.order);

	console.log('orderState', orderState);
	console.log('orderState.loading ', orderState.loading);

	const getOrderList = () => {
		GetOrderList(dispatch)
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {
				OnError({ text: error.message });
			});
	};

	useEffect(() => {
		getOrderList();
	}, []);

	return (
		<div className='content'>
			<div className='header-content'>Order List</div>

			<div className='action-list'>
				<button
					className='add-order-btn'
					onClick={() => props.history.push('/order/add-order')}
				>
					Add Order
				</button>
			</div>

			<div className='c-table'>
				<div className='table'>
					<div className='thead'>
						<div className='th'>Order Id</div>
						<div className='th'>Pick Up</div>
						<div className='th'>Consignee</div>
						<div className='th'>Dimension</div>
						<div className='th'>Payment Type</div>
						<div className='th'>Action</div>
					</div>
					<div className='tbody'>
						{orderState.loading && (
							<div className='row-td'>
								<div className='td center'>
									<ReactLoading type='spinningBubbles' color={'#2893e1'} />
								</div>
							</div>
						)}

						{orderState.loading ? null : data.length === 0 ? (
							<div className='row-td'>
								<div className='td center'>Tidak Ada data</div>
							</div>
						) : (
							data?.map((dt, idx) => (
								<div className='row-td' key={idx}>
									<div className='td center br'>{dt.order_id}</div>
									<div className='td center br'>
										<div className='td-c-info center'>
											<span className='title'>{dt.pickup_contact_name}</span>
											<span className='data'>{dt.pickup_address}</span>
										</div>
									</div>
									<div className='td center br'>
										<div className='td-c-info center'>
											<span className='title'>{dt.consignee_name}</span>
											<span className='data'>{dt.consignee_address}</span>
										</div>
									</div>
									<div className='td  br'>
										<div className='td-c-info-2'>
											<div className='row'>
												<div className='title'>
													<span>Length</span>
													<span>:</span>
												</div>
												<div className='data'>
													{dt.length ? nf.format(dt.length) + ' m' : ''}
												</div>
											</div>
											<div className='row'>
												<div className='title'>
													<span>Width</span>
													<span>:</span>
												</div>
												<div className='data'>
													{dt.width ? nf.format(dt.width) + ' m' : ''}
												</div>
											</div>
											<div className='row'>
												<div className='title'>
													<span>Height</span>
													<span>:</span>
												</div>
												<div className='data'>
													{dt.height ? nf.format(dt.height) + ' m' : ''}
												</div>
											</div>
											<div className='row'>
												<div className='title'>
													<span>Weight</span>
													<span>:</span>
												</div>
												<div className='data'>
													{dt.weight ? nf.format(dt.weight) + ' kg' : ''}
												</div>
											</div>
										</div>
									</div>
									<div className='td center br'>{dt.payment_type}</div>
									<div className='td center'>
										<button className='btn-action'>Detail</button>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
