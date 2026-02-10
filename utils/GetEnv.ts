export function GetEnv(ENV: string) {
	return process.env[ENV] ?? ""
}