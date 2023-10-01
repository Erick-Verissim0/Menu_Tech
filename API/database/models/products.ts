export const MysqlProducts = `
CREATE TABLE IF NOT EXISTS products (
  id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200),
  value int NOT NULL
  )
`;
