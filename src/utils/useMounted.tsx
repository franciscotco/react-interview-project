// Vendors
import React from 'react';

function useMounted () {

	const mounted = React.useRef(false);

	React.useEffect(() => {

		mounted.current = true;

		return () => { mounted.current = false; };
	}, []);

	return mounted.current;
}

export { useMounted };
