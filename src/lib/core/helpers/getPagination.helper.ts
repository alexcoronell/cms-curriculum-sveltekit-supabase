export const getPagination = (page: number, limit: number) => {
	return {
		from: (page - 1) * limit,
		to: page * (limit -1)
	}
}