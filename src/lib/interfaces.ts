export interface TypeKeyData {
    id: string;
    name: string;
    device: string;
    reserved: boolean;
};

export interface UserKeysResponse {
    keys: TypeKeyData[];
}