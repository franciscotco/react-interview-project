// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { Formik, Field, ErrorMessage } from 'formik';

// API
import { updateUser } from 'api/user';

// Types
import IUser from 'types/user';

// Utils
import { useMounted } from 'utils/useMounted';

interface IProps {
	user: IUser
}

const UserForm = ({ user }: IProps) => {

	const intl = useIntl();
	const mounted = useMounted();

	return (
		<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
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

					if (!mounted) {
						return;
					}

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

						<button type="submit" disabled={(errors.name && errors?.name?.length > 0) || isSubmitting || !mounted}>
							{intl.formatMessage({ id: 'FORMS.USER.SUBMIT' })}
						</button>
					</form>
				)}
			</Formik>
		</div>
	);

};

export default UserForm;
