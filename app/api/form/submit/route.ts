import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const res = await request.json();

        const filePath = path.join(process.cwd(), 'backend/submissions/data.json');

        const fileData = fs.readFileSync(filePath, 'utf8');
        let existingData = JSON.parse(fileData);

        existingData = {
            ...existingData,
            [res.formId]: res
        }

        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

        return new Response(JSON.stringify({ message: 'Form Submitted successfully', data: res }), {
            status: 200,
        });
    } catch (error: any) {
        console.error('Error writing file:', error);
        return new Response(JSON.stringify({ message: 'Error writing data', error: error.message }), {
            status: 500,
        });
    }
}
