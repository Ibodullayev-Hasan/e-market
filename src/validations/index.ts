import {
	object,
	string,
	minLength,
	maxLength,
	regex,
	safeParse,
	pipe,
} from 'valibot';

const loginRegex = /^[a-zA-Z0-9_]+$/;

export const userSchema = object({
	username: string(), // oddiy string
	login: pipe(
		string(),
		regex(loginRegex, 'login can only contain letters, numbers, and underscores')
	),
	password: pipe(
		string(),
		minLength(4, 'password too short'),
		maxLength(8, 'password too long'),
		regex(/[a-zA-Z]/, 'password must contain at least one letter'),
		regex(/[0-9]/, 'password must contain at least one number')
	)
});


// 
export const validateUserData = (data: unknown): string | null => {
	const result = safeParse(userSchema, data);
	if (!result.success) {
		return result.issues[0].message;
	}
	return null;
}
