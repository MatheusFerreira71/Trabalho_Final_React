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

            if (!flower) return response.status(404).send('Not Found');

            return response.json(flower);
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { body } = request
            await knex('flowers').where({ id }).update(body);

            return response.sendStatus(204);
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }

    async create(request: Request, response: Response) {
        try {
            const { nome, grupo, tipo, tamanho } = request.body;
            const newFlower = { nome, grupo, tipo, tamanho };
            const insertedIds = await knex('flowers').insert(newFlower);
            const flowerId = insertedIds[0];

            return response.status(201).json({ id: flowerId, ...newFlower });
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const flower = await knex('flowers').where({ id }).delete();

            if (!flower) return response.status(404).send('Not Found');

            return response.json(flower);
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }

    async count(request: Request, response: Response) {
        try {
            const totalCount = await knex('flowers').count({ totalCount: 'id' });
            return response.json(totalCount[0]);
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }
}

export default FlowersController;