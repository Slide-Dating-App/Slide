class MockDatabase {
    /* The MockDatabase is used for testing purposes. It allows the testing of models without affecting
     * the database used in production
     */
    tables;
    constructor() {
        this.tables = { users: [] };
    }
    async create(tableName, data) {
        await this.tables.tableName.push(data);
    }
    async get(tableName, columns, conditions) {
        return this.tables.tableName;
    }
    async update(tableName, id, data) {
        return;
    }
    async delete(tableName, id) {
        return;
    }
}
export default MockDatabase;
