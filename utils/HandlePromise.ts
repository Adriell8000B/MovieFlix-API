export async function HandlePromise<T>(promise: Promise<T>): Promise<[T | null, Error | null]> {
	try {
		const response = await promise
		return [response, null]
	} catch (error) {
		const normalizedError = error instanceof Error
			? error
			: new Error(String(error));
		return [null, normalizedError];
	}	
}