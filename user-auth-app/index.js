/* eslint-disable no-undef */
import { writeFileSync } from "fs";
import { faker } from "@faker-js/faker";

// const randomName = faker.person.fullName();
// console.log(randomName);

const dataGenerator = () => {
  const data = {
    users: [],
  };

  for (let i = 1; i < 10; i++) {
    data.users.push({
      id: i,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  }

  //console.log(data.users)
  return data;
};

const saveDataToFile = (data) => {
  writeFileSync("db.json", JSON.stringify(data, null, 2), "utf-8");
  console.log("Fake data generated and saved to db.json");
};

const fakeData = dataGenerator();
saveDataToFile(fakeData);
