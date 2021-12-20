import { toast } from 'react-toastify';

export const OnSuccess = ({ text }) => {
	return toast.success(`${text}`);
};

export const OnError = ({ text }) => {
	return toast.error(`${text}`);
};

export const OnWarning = ({ text }) => {
	return toast.warning(`${text}`);
};

export const OnInfo = ({ text }) => {
	return toast.info(`${text}`);
};
