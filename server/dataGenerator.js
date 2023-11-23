import { faker } from "@faker-js/faker";

export default function dataGenerator() {
  const data = {
    users: [],
  };

  for (let i = 1; i < 20; i++) {
    data.users.push({
      id: i,
    });
  }

  return data;
}
