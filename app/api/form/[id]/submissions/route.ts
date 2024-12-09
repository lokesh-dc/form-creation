let data = require("@/backend/submissions/data.json");
let formdata = require("@/backend/forms/data.json");


export async function GET(request: Request,
    { params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id;

    let output = data[id];
    if (!output) {
        let formDetails = formdata[id];
        output = {
            title: formDetails?.formTitle
        }
    } else {
        let submitted = []
        let { formFields: field, formTitle } = formdata[id];
        for (let key = 0; key < field?.length; key++) {
            let { id: fieldId, title: fieldTitle } = field[key]
            let fieldSubmissions = []
            let questionData = data[id]?.data || []
            for (let sub = 0; sub < questionData.length; sub++) {
                fieldSubmissions.push(questionData[sub][fieldId])
            }

            submitted.push({
                fieldId,
                title: fieldTitle,
                data: fieldSubmissions
            })
        }

        output = {
            title: formTitle,
            data: submitted
        };
    }
    return Response.json(output);
}
