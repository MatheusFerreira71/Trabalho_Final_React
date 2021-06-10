import knex from '../database/connection';
import { Request, Response } from 'express';

class FlowersController {
    async index(request: Request, response: Response) {
        try {
            const { page, itemsPerPage } = request.query;
            const flowers = await knex('flowers').select('*').limit(Number(itemsPerPage))
                .offset(Number(itemsPerPage) * Number(page) - Number(itemsPerPage));
            return response.json(flowers);
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }

    async show(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const flower = await knex('flowers').select('*').where({ id });

            if (flower) return response.status(404).send('Not Found');

            return response.json(flower);
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { nome, grupo, tipo, tamanho } = request.body;
            const flower = await knex('flowers').where({ id });

            if (flower) return response.status(404).send('Not Found');

            return response.json(flower);
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }
}