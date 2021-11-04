import { useEffect } from 'react';

const useScript = (props) => {
  useEffect(() => {
    const script = document.createElement('script');

    if(props.src) script.src = props.src
    if(props.integrity) script.integrity = props.integrity
    if(props.crossOrigin) script.crossOrigin = props.crossOrigin
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [props]);
};

export default useScript;