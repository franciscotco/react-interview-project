// Types
import IGeo from './geo';

interface IAddress {
	city: string,
	geo: IGeo,
	street: string,
	suite: string,
	zipcode: string,
}

export default IAddress;
