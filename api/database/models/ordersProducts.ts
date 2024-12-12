export const MysqlOrderProducts = `
CREATE TABLE IF NOT EXISTS order_products (
  id int AUTO_INCREMENT PRIMARY KEY,
  order_id int NOT NULL,
  product_id int NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
)
`;
