export const MysqlRequests = `
CREATE TABLE IF NOT EXISTS requests (
  id int AUTO_INCREMENT PRIMARY KEY,
  table_id int NOT NULL,
  products_id int NOT NULL,
  total_value int NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (table_id) REFERENCES tables(id), 
  FOREIGN KEY (products_id) REFERENCES products(id) 
)
`;
