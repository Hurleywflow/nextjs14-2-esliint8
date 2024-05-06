/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
// validateString helper
// biome-ignore lint/correctness/noUnusedVariables: <explanation>
const validateString = (value: unknown, maxLength: number): value is string => {
	if (!(value) || typeof value !== "string" || value.length > maxLength) {
		return false;
	}
	return true;
};

// Handle errors message
export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (
		typeof error === "object" &&
		error !== null &&
		"message" in error
	) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "Something went wrong";
	}

	return message;
};
