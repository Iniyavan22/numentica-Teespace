import { Client, Databases,ID } from "appwrite";

const url = 'https://cloud.appwrite.io/v1';

const projectId = '6617679f5c0eb645569f';



const client = new Client()
    .setEndpoint(url)  
    .setProject(projectId);

const databases = new Databases(client);

const updateDocument = async (data:any,documentId:any) => {
    await databases.updateDocument(
        '661767c126a43868fb25',
        '663da29b000ceadef59d',
        documentId,
        data,
    );
}

export default updateDocument;
