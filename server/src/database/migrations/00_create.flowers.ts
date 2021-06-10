import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('flowers', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('grupo').notNullable();
        table.string('tipo').notNullable();
        table.string('tamanho').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('flowers');
}