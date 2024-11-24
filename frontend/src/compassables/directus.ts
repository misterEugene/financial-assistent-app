import { createDirectus, rest, authentication, type DirectusClient } from '@directus/sdk'
import { redirectToUserLogin } from './userStore';

let directusClient: DirectusClient<{}> | null = null;

export async function useDirectus() {
	const directusClient = instanceDirectus()
	// const isAuth = await checkAuth()
	// if(!isAuth) return null

	return directusClient
}

export async function instanceDirectus() {
	let public_api_url: string = 'http://local-api.pts.ru:8000';
	if (directusClient === null) {
		directusClient = createDirectus(public_api_url)
			.with(authentication('session', { credentials: 'include' }))
			.with(rest({ credentials: 'include' }))
		
	}
	return directusClient
}


let waitingAccessToken: Promise<null> | null = null;

export async function checkAuth() {
	try {
		if (!waitingAccessToken) {
			waitingAccessToken = await directusClient.refresh()
		}
		return true
	} catch (e) {
		await waitingAccessToken
		return false
	}
	

}