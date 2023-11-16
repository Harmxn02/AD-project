"use client";

import { useEffect, useState } from "react";

export const getAPI = (path) => {
	const [apiData, setApiData] = useState(null);
	const URL = `https://project-2.ti.howest.be/2023-2024/group-17/api`;

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			try {
				const response = await fetch(URL + path);
				await response.json().then((data) => {
					if (isMounted) {
						const firstKey = Object.keys(data)[0];
						setApiData(data[firstKey]);
					}
				});
			} catch (error) {
				console.error("Error", error);
			}
		};
		fetchData();

		return () => {
			isMounted = false;
		};
	}, [URL, path]);
	return apiData;
};

function poc() {
    const messageBody = {
        "quote": "some quote"
    };
    get("quotes/1");
    post("quotes", messageBody);
    put("quotes/1", messageBody);
}

function get(uri, successHandler = logJson, failureHandler = logError) {
    const request = new Request(api + uri, {
        method: 'GET',
    });

    call(request, successHandler, failureHandler);
}

function post(uri, body, successHandler = logJson, failureHandler = logError) {
    const request = new Request(api + uri, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;'
        },
        body: JSON.stringify(body)
    });

    call(request, successHandler, failureHandler);
}

function put(uri, body, successHandler = logJson, failureHandler = logError) {
    const request = new Request(api + uri, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;'
        },
        body: JSON.stringify(body)
    });

    call(request, successHandler, failureHandler);
}

function remove(uri, successHandler = logJson, failureHandler = logError) {
    const request = new Request(api + uri, {
        method: 'DELETE',
    });

    call(request, successHandler, failureHandler);
}

function logJson(response) {
    response.json().then(console.log);
}

function logError(error) {
    console.log(error);
}

function call(request, successHandler, errorHandler) {
    fetch(request).then(successHandler).catch(errorHandler);
}
