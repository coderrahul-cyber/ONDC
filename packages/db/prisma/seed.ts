import {PrismaClient} from '@prisma/client'
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main(){
    const alice = await prisma.user.upsert({
        where : {
            email : 'alice@gmail.com'
        },
        update : {},
        create : {
            email : 'alice@gmail.com',
            name : 'alice',
            password : await bcrypt.hash('alice' , 10),
            contactDetail : {
                create : {
                    phoneNumber : "9999999",
                    address : {
                        create : {
                            state: "UK",
                            street : '12',
                            city : "lodno",
                            zipcode : "kadjl",
                            country : "india"
                        }
                    }
                }
            }
        },
    })
}

main().then(async ()=>{
    await prisma.$disconnect()
}).catch(async (e) =>{
    console.log(e);
    await prisma.$disconnect()
    process.exit(1)
})