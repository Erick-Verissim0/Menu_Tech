import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Container, Content, Table, Td, Th } from './styles';

type Order = {
  id: number;
  table_id: number;
  product_name: string;
  total_value: number;
  created_at: string;
};

export function InitialPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then((response) => response.json())
      .then((data: Order[]) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar pedidos:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1> Pedidos </h1>
          <Table>
            <thead>
              <tr>
                <Th>Numero do pedido</Th>
                <Th>Mesa</Th>
                <Th>Produto(s)</Th>
                <Th>Valor do pedido</Th>
                <Th>Criado em</Th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <Td>{order.id}</Td>
                  <Td>{order.table_id}</Td>
                  <Td>{order.product_name}</Td>
                  <Td>{order.total_value}</Td>
                  <Td>{new Date(order.created_at).toLocaleString()}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Content>
      </Container>
    </>
  );
}
