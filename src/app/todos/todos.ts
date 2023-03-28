export interface Todo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number,
    favorite?: boolean;
}

export interface User {
    username: string,
    quote: string;

}