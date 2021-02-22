// Vendors
import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

// API
import { updateUser } from 'api/user';
import IUser from 'types/user';

interface IProps {
	user?: IUser
}

const UserForm = ({ user }: IProps) => {

	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	if (!user) {
		return null;
	}

	return (
		<div>

			<h1>Any place in your app!</h1>

			<Formik
				initialValues={{ name: user.name }}
				validate={values => {

					const errors: { name?: string } = {};

					if (!values.name) {
						errors.name = 'Required';
					}

					console.log('errors');

					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {

					console.log('submit');
					setSubmitting(true);

					updateUser({ ...user, name: values.name })
						.then(res => {
							console.log(res);
							if (mounted) {
								setSubmitting(false);
							}
						})
						.catch(res => {
							console.error(res);
							if (mounted) {
								setSubmitting(false);
							}
						});
				}}
			>
				{({ isSubmitting, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Field type="text" name="name" />
						<ErrorMessage name="name" component="div" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	);

};

export default UserForm;
