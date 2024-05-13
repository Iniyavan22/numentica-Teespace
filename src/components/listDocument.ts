import { Client, Databases } from "appwrite";

const url = 'https://cloud.appwrite.io/v1';
const client = new Client();
const databases = new Databases(client);
const projectId ='6617679f5c0eb645569f';

const scanDocuments = async (databaseId: string, collectionId: string, query:any[]) => {
    client
        .setEndpoint(url)
        .setProject(projectId);
    try {
        const response = await databases.listDocuments(databaseId, collectionId ,query)
        return response;
    } 
    catch (error) {
        console.log(error);
    };
}

export default scanDocuments;