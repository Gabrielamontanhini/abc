import app from "@/app";
import supertest from "supertest";
import prisma from "@/database/db.connection";

const api = supertest(app);


beforeEach(() => {
    prisma.profile.deleteMany();
});

describe("GET /profiles/count", () => {
    it("should return the number of profiles", () => {

        const count = api.get("/profiles/count");
    });
});

describe("GET /profiles/find-by", () => {
    describe("when token is valid", () => {

    });
});

describe("PATCH /profiles", () => {
    describe("when token is valid", () => {

    });
});

describe("DELETE /profiles", () => {
    describe("when token is valid", () => {

    });
});