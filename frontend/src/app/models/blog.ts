export interface Blog {
    _id: string,
    title: string, 
    description: string, 
    category: string, 
    image: string,
    comments: Array<string>,
    createdAt?: string,
    updatedAt?: string
}
