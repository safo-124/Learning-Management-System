const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Pure Mathematics" },
        { name: "Biology" },
        { name: "Sociology" },
        { name: "Economics" },
        { name: "Music" },
        { name: "Geography" },
        { name: "History" },
        { name: "Business" },  
        { name: "French" },  
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
