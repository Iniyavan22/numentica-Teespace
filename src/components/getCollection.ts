import { Client, Databases } from "appwrite";

const url = 'https://cloud.appwrite.io/v1';
const client = new Client();
const databases = new Databases(client);
const projectId ='6617679f5c0eb645569f';

const listDocuments = async (databaseId: string, collectionId: string) => {
    client
        .setEndpoint(url)
        .setProject(projectId);
    try {
        const response = await databases.listDocuments(databaseId, collectionId)
        return response.documents;
    } 
    catch (error) {
        console.log(error);
    };
}

export default listDocuments;