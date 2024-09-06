export const MysqlOrders = `
CREATE TABLE IF NOT EXISTS orders (
  id int AUTO_INCREMENT PRIMARY KEY,
  table_id int NOT NULL,
  product_id int NOT NULL,
  product VARCHAR(250) DEFAULT NULL,
  total_value int NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (table_id) REFERENCES tables(id), 
  FOREIGN KEY (product_id) REFERENCES products(id) 
)
`;
