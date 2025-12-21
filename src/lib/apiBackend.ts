import { PUBLIC_FIREBASE_BACKEND_URL } from '$env/static/public';

async function updateKey(keyId: string, name: string, reserved: boolean, token: string) {
    const backendUrl = PUBLIC_FIREBASE_BACKEND_URL || 'http://localhost:8000';

    const response = await fetch(`${backendUrl}/keys/update_user_key/${keyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({ name, reserved })
    });

    return response;
}
//example response: {
//            "success": True,
//            "message": "Clave actualizada exitosamente",
//            "key_id": key_id,
//            "name": update_data.name,
//            "reserved": update_data.reserved
//        }

async function createKey(name: string, token: string) {
    const backendUrl = PUBLIC_FIREBASE_BACKEND_URL || 'http://localhost:8000';

    const response = await fetch(`${backendUrl}/keys/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name })
    });

    return response;
};

// example response: { "success": True, "message": "Key creada exitosamente", "key_id": key_id, "data": {"device": "", "name": key_data.name,"reserved": False,"secretKey": secret_key,"user": user_id }}

async function getUserKeys(token: string) {
    const backendUrl = PUBLIC_FIREBASE_BACKEND_URL || 'http://localhost:8000';

    const response = await fetch(`${backendUrl}/keys/list`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true'
        }
    });

    return response;
}

export { updateKey, createKey, getUserKeys };