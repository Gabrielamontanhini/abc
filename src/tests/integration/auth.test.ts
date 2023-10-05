import app from "@/app";
import supertest from "supertest";
import authFactory from "../factories/auth.factory";
import { cleanDB } from "../helpers";
import { faker } from "@faker-js/faker";

const api = supertest(app);

beforeEach(async () => {
    await cleanDB();
});

describe("POST /auth/sign-up", () => {
    it("should respond with status code 422 when body is not sent", async () => {
        const { status } = await api.post("/auth/sign-up").send({});
        expect(status).toBe(422);
    });

    it("should respond with status code 422 when body is invalid", async () => {
        const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };
        const { status } = await api.post("/auth/sign-up").send(invalidBody);
        expect(status).toBe(422);
    });

    describe("when body is valid", () => {
        it("should respond with status code 409 when nickname already exists", async () => {
            const { profile } = await authFactory.buildRandom();
            if (profile == null) fail("profile must be exists");

            const { nickname } = profile;
            const { email, password, fullname, description, avatarUrl } = authFactory.random();

            const { status } = await api.post("/auth/sign-up").send({
                email, password, nickname, fullname, description, avatarUrl, birthday: "01-01-1999" // FIXME: after randomize date
            });
            expect(status).toBe(409);
        });

        it("should respond with status code 409 when email already exists", async () => {
            const { email } = await authFactory.buildRandom();
            const randomProfile = authFactory.random();

            const { status } = await api.post("/auth/sign-up").send({
                ...randomProfile, email, birthday: "01-01-1999" // FIXME: after randomize date
            });
            expect(status).toBe(409);
        });

        it("should respond with status code 409 when nickname and email already exists", async () => {
            const { email, profile } = await authFactory.buildRandom();

            if (profile == null) fail("profile must be exists");
            const { nickname } = profile;
            const { password, fullname, description, avatarUrl } = authFactory.random();

            const { status } = await api.post("/auth/sign-up").send({
                email, nickname, password, fullname, description, avatarUrl, birthday: "01-01-1999" // FIXME: after randomize date
            });
            expect(status).toBe(409);
        });

        it("should respond with status code 201", async () => {
            const { email, password, nickname, fullname, description, avatarUrl } = authFactory.random();

            const { status } = await api.post("/auth/sign-up").send({
                email, password, nickname, fullname, description, avatarUrl, birthday: "01-01-1999" // FIXME: after randomize date
            });
            expect(status).toBe(201);
        });
    });
});

describe("POST /auth/sign-in", () => {
    // it("");
});