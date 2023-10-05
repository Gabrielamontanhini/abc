import prisma from "@/database/db.connection";
import faker from "@faker-js/faker";
import { Profile } from "@prisma/client";

function build() {
    // return await prisma.profile.create({
    //     data: {nickname, fullname, email, password, birthday, avatarUrl, description, bio, }
    // })
}

function createRandom() {

}

const profileFactory = { build, createRandom };