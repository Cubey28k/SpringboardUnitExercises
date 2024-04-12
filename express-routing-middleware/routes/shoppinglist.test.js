process.env.NODE_ENV = "test";
const request = require("supertest");

const app = require("../app");
let items = require("../fakeDb");
const { beforeEach } = require("node:test");

let eggs = { name: "eggs", price: "2.00" };

beforeEach(() => {
    items.push(eggs);
});

afterEach(() => {
    //in order to ensure no actual changes are made when testing `items`
    items.length = 0;
});

describe("GET /items", () => {
    test("Get all items", async () => {
        const res = await request(app).get("/items");
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ items: [eggs] })
    }, 10000);
})

describe("GET /items/:name", () => {
    test("Get item name and price", async () => {
        const res = await request(app).get(`/items/${eggs.name, eggs.price}`);
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ item: eggs})
    })
    test("Responds with 404 for invalid item", async () => {
        const res = await request(app).get(`/items/cheeseburger`);
        expect(res.statusCode).toBe(404)
    })
})


describe("POST /items", () => {
    test("Creating items, including a price", async () => {
        const res = (await request(app).post("/items")).send({name: "Dishwasher Pods", price: "6.00"});
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({item: {name: "Dishwasher Pods", price: "6.00"}});
    })
    test("Responds with 400 if name or price is missing", async () => {
        const res = (await request(app).post("/items")).send({});
        expect (res.statusCode).toBe(400);
    })
})

describe("/PATCH /items/:name", () => {
    test("updating an item name or price", async () => {
        const res = await request(app).patch(`/items/${eggs.name},${eggs.price}`).send({ name: "comb", price: "3.00"})
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ item: { name: "comb", price: "3.00"} });
    })
    test("Responds with 404 for invalid name or price", async () => {
        const res = await request(app).patch(`/items/dragonfruit`).send({ name: "comb" });
        expect(res, statusCode).toBe(404);
    })
})

describe("/DELETE /items/:name", () => {
    test("Deleting an item", async () => {
      const res = await request(app).delete(`/items/${eggs.name}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ message: 'Deleted' })
    })
    test("Responds with 404 for deleting invalid item", async () => {
      const res = await request(app).delete(`/items/soap`);
      expect(res.statusCode).toBe(404);
    })
  })
  