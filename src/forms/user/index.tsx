// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { Formik, Field, ErrorMessage } from 'formik';

// API
import { updateUser } from 'api/user';
import IUser from 'types/user';

interface IProps {
	user: IUser
}

const UserForm = ({ user }: IProps) => {
	let mounted = false;

	const intl = useIntl();

	React.useEffect(() => {
		mounted = true;

		return () => { mounted = false; };
	}, []);

	return (
		<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>

			<h1>{intl.formatMessage({ id: 'FORMS.USER.TITLE' })}</h1>

			<div>
				<Formik
					initialValues={{ name: user.name }}
					validate={values => {

						const errors: { name?: string } = {};

						if (!values.name) {
							errors.name = 'Required';
						}

						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {

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
					{({ isSubmitting, handleSubmit, errors }) => (
						<form onSubmit={handleSubmit}>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<label htmlFor="name" style={{ color: errors.name ? 'red' : 'unset' }}>
									{intl.formatMessage({ id: 'FORMS.USER.NAME' })}
								</label>
								<div>
									<Field type="text" name="name" />
								</div>
								<ErrorMessage name="name" component="div" />
							</div>

							<button type="submit" disabled={!!errors?.name?.length || isSubmitting}>
								{intl.formatMessage({ id: 'FORMS.USER.SUBMIT' })}
							</button>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);

};

export default UserForm;
