export async function HandlePromise<Type>(promise: Promise<Type>): Promise<[Type | null, Error | null]> {
	try {
		const response = await promise
		return [response, null]
	} catch(error) {
		return [null, error as Error]
	}
}