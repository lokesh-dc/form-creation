let data = require("@/backend/submissions/data.json");

export async function GET(request: Request,
    { params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id;
    return Response.json(data[id] || []);
}
