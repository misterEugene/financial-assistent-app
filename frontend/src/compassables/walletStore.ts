
import { useDirectus } from '../compassables/directus';
import { readItems, readItem } from '@directus/sdk'; 


export async function loadWallets(userUuid: string) {
	const directusClient = await useDirectus();
	const responseUserWallets = await directusClient.request(readItems('wallets', {
        filter: {
            user_id: {
                _eq: `${userUuid}`
            },
            status: {
                _eq: `published`
            }
        }
    }))
    return responseUserWallets
}

// export async function loadWallet(uuidWallet: string) {
// 	const directusClient = await useDirectus();
// 	const responseUserWallets = await directusClient.request(readItem('wallets', {
//         filter: {
//             user_id: {
//                 _eq: `${uuidWallet}`
//             },
//             status: {
//                 _eq: `published`
//             }
//         }
//     }))
//     return responseUserWallets
// }

