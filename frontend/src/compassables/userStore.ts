
import { useDirectus, instanceDirectus } from '../compassables/directus';
import { readUser, readUsers } from '@directus/sdk'; 
import { createUser } from '@directus/sdk'; 

export async function redirectToUserLogin() {
	window.location.replace(`${window.location.protocol}//${window.location.host}/login`)
}

// const result = await client.request(readItems('collection_name', {}));

export async function userGetById(uuid: string) {
	const directusClient = await useDirectus();
	
	const result = await directusClient.request(readUser(uuid));
	
	return result;
}

export async function registerUser(userRegisterData: object) {
	try {
		const directusClient = await instanceDirectus()
		const user = await directusClient.request(createUser(userRegisterData))
		return {
			status: "ok", 
			data: user
		}
	} catch (e) {
		return { status: 'error', error: e }
	}
	
}


export async function loginUser(email: string, password: string) {
	try {
		const directusClient = await useDirectus()
		const responseLoginUser = await directusClient.login(email, password)
		
		return {
			status: "ok", 
			data: responseLoginUser
		}
	} catch (e) {
		return { status: 'error', error: e }
	}
	
}

export async function userGetByEmail(email:string) {
	const directusClient = await useDirectus();
	
	const result = await directusClient.request(readUsers({filter: {
		email: {_eq: email.toLowerCase()}
	}}))
	
	return result[0]
}


export async function userLogout() {
	const directusClient = await useDirectus();
	await directusClient.logout();
	await redirectToUserLogin();
}

