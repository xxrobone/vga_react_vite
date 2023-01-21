import { useState, useEffect, useRef } from 'react';

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = useRef(_options);

  useEffect(() => {
    console.log(options);
    const controller = new AbortController();

    setTimeout(() => {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const res = await fetch(url, { signal: controller.signal });
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          const data = await res.json();
          /*  console.log('from fetch \n' + data.results); */
          setIsLoading(false);
          setData(data.results);
          setError(null);
        } catch (err) {
          if (err.name === 'AbortError') {
            console.log('the fetch was aborted' + 'error name ' + err.name);
          } else {
            setIsLoading(false);
            setError('Could not fetch data');
            console.log(err.message);
          }
        }
      };

      fetchData();
    }, 1000);

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, isLoading, error };
};

/* react devtools backend 4066
18 of 1st of September 2021. See comment of one of the developers on the React GitHub issue.

Quoting here in case you don't want to check the log or it gets deleted:

As of the version 18 release, DevTools always overrides the native console to either dim or suppress StrictMode double logging. (Before it only did it if you enabled a feature like component stacks.)

The major unfortunate drawback of this overriding is that it changes the location shown by the browser's console as reported in this issue.
*/
