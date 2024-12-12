import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Container, Content, EditButton, Table, Td, Th, Modal, ModalContent, Input, SaveButton, DeleteButton, CancelButton, ProductName, ProductPrice, ProductCheckboxLabel, ProductLabel } from './styles';
import { Footer } from '../Footer';

type Product = {
  id: number;
  product_id: number;
  name: string;
  product_name: string;
  value: number;
};

type Order = {
  id: number;
  table_id: number;
  total_value: number;
  created_at: string;
  products: Product[];
};

export function InitialPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedFields, setEditedFields] = useState({
    table_id: '',
    total_value: '',
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

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

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  const openModal = (order: Order) => {
    setSelectedOrder(order);
    setEditedFields({
      table_id: order.table_id.toString(),
      total_value: order.total_value.toString(),
    });
    setSelectedProducts(order.products.map((product) => product.product_id));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setEditedFields({
      table_id: '',
      total_value: '',
    });
    setSelectedProducts([]);
    setIsModalOpen(false);
  };

  const handleFieldChange = (field: string, value: string) => {
    setEditedFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProductChange = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSaveChanges = async () => {
    if (selectedOrder) {
      try {
        const updatedOrder = {
          table_id: parseInt(editedFields.table_id, 10),
          product_id: selectedProducts,
          total_value: parseFloat(editedFields.total_value),
          deleted_at: false,
        };

        const response = await fetch(`http://localhost:3001/order/update/${selectedOrder.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedOrder),
        });

        if (response.ok) {
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === selectedOrder.id ? { ...order, ...updatedOrder } : order
            )
          );
          closeModal();
        } else {
          console.error('Erro ao atualizar pedido:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao atualizar pedido:', error);
      }
    }
  };

  const handleDeleteOrder = async () => {
    if (selectedOrder) {
      try {
        const response = await fetch(`http://localhost:3001/order/update/${selectedOrder.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            table_id: selectedOrder.table_id,
            product_id: selectedOrder.products.map((product) => product.id),
            total_value: selectedOrder.total_value,
            deleted_at: true,
          }),
        });

        if (response.ok) {
          setOrders(orders.filter((order) => order.id !== selectedOrder.id));
          closeModal();
        } else {
          console.error('Erro ao deletar pedido:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao deletar pedido:', error);
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Pedidos</h1>
          <Table>
            <thead>
              <tr>
                <Th>Numero do pedido</Th>
                <Th>Mesa</Th>
                <Th>Produto(s)</Th>
                <Th>Valor do pedido</Th>
                <Th>Criado em</Th>
                <Th>Ação</Th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <Td>{order.id}</Td>
                  <Td>{order.table_id}</Td>
                  <Td>{order.products.map((product) => product.product_name).join(', ')}</Td>
                  <Td>{order.total_value}</Td>
                  <Td>{new Date(order.created_at).toLocaleString()}</Td>
                  <Td>
                    <EditButton onClick={() => openModal(order)}>Alterar Pedido</EditButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Content>
      </Container>
      {isModalOpen && selectedOrder && (
        <Modal>
          <ModalContent>
            <h2>Alterar Pedido</h2>
            <label>
              Mesa:
              <Input
                type="number"
                value={editedFields.table_id}
                onChange={(e: any) => handleFieldChange('table_id', e.target.value)}
              />
            </label>
            <label>
              <ProductLabel>Produto(s):</ProductLabel>
              <div>
                {products.map((product) => (
                  <ProductCheckboxLabel key={product.id}>
                  <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleProductChange(product.id)}
                  />
                  <ProductName>{product.name}</ProductName> - <ProductPrice>R$ {product.value}</ProductPrice>
                  </ProductCheckboxLabel>
                  ))}
              </div>
            </label>
            <label>
              Valor Total:
              <Input
                type="number"
                value={editedFields.total_value}
                onChange={(e: any) => handleFieldChange('total_value', e.target.value)}
              />
            </label>
            <SaveButton onClick={handleSaveChanges}>Salvar Alterações</SaveButton>
            <CancelButton onClick={closeModal}>Cancelar</CancelButton>
            <DeleteButton onClick={handleDeleteOrder}>Deletar Pedido</DeleteButton>
          </ModalContent>
        </Modal>
      )}
      <Footer />
    </>
  );
}
