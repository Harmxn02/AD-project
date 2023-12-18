// useLocalStorage.js
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	// Get stored value from localStorage or use the provided initial value
	const storedValue = localStorage.getItem(key) || initialValue;

	// Create state to hold the current value
	const [value, setValue] = useState(storedValue);

	// Function to update the stored value and the state value
	const updateValue = (newValue) => {
		setValue(newValue);
		localStorage.setItem(key, newValue);
	};

	return [value, updateValue];
};

export default useLocalStorage;
