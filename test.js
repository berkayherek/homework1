const { Client, Databases } = require('appwrite');

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your endpoint
  .setProject('6766c96500252cb91aa4') // Replace with your project ID
  .setKey('YOUR_API_KEY'); // Replace with your API key (if required)

const databases = new Databases(client);

async function testFetch() {
  try {
    const response = await databases.listDocuments('6766c9ea002a69ed19fe', '6766ca02003df5419c7e');
    console.log('Documents:', response.documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
  }
}

testFetch();
