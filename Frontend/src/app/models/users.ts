export interface User {
    id?: number;
    fullname?: string;
    username?: string;
    password?: string;
    email?: string;
    image?: string;
    role?: string;
    country?: string;
    description?: string;
    created_at?: Date;
    updated_at?: Date;
    token?: string;
}
