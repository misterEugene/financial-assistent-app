
import { useDirectus } from '../compassables/directus';
import { readItems } from '@directus/sdk'; 


export async function loadWallets(uuid: string) {
	const directusClient = await useDirectus();
	const responseUserWallets = await directusClient.request(readItems('wallets', {
        filter: {
            user_id: {
                _eq: `${uuid}`
            },
            status: {
                _eq: `published`
            }
        }
    }))
    return responseUserWallets
}

