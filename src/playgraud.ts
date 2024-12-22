import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'haggu@km.lop',
        firstName: 'Haggu',
        lastName: 'Hatela',
        // imageUrl: 'skdskd.png'
    }
})