// Types
import IAddress from './address';
import ICompany from './company';

interface IUser {
	company: ICompany,
	address: IAddress,
	email: string,
	id: number,
	name: string,
	phone: string,
	username: string,
	website: string
}

export default IUser;
