let data = require("@/backend/forms/data.json");

export async function GET() {
    return Response.json(data || []);
}
