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

export { updateKey };