import { Client, Databases } from "appwrite";

const url = 'https://cloud.appwrite.io/v1';
const client = new Client();
const databases = new Databases(client);
const projectId = '6617679f5c0eb645569f';



const getDocument =async (databaseId: any, collectionId: any, documentId: any) => {

    client
        .setEndpoint(url)
        .setProject(projectId);

    try {
        const response = await databases.getDocument(databaseId, collectionId, documentId);
        return response;
    }
    catch (error) {
        console.log(error);
    };
}

export default getDocument;