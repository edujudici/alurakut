import { SiteClient } from 'datocms-client';

export default async function recebedorDaRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = 'b11312de42c2ca64ff70ef6d3c4c4e';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "974896", // model ID criado pelo Dato
            ...request.body
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}