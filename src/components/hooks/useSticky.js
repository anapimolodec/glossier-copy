import {useEffect, useState, useRef} from 'react';
import _ from 'lodash'; 

function useSticky() {
	const [isSticky, setSticky] = useState(false)
	const stickyRef  = useRef(null);

	const handleScroll = () => {
    	window.scrollY > stickyRef.current.getBoundingClientRect().bottom
	      ? setSticky(true)
	      : setSticky(false);
    }

	const debounced_version = _.debounce(handleScroll,20);
	useEffect(() => {
		window.addEventListener("scroll", debounced_version)
   		 return () => {
      		window.removeEventListener("scroll", () => handleScroll);
    	};
  	}, [debounced_version]);

  return [isSticky, stickyRef]
}

export default useSticky