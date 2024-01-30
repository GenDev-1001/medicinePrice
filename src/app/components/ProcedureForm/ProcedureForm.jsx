"use client";
import { Button, Form, Input, InputNumber, Modal } from "antd";

import "./ProcedureForm.css";

export const ProcedureForm = ({ onCancel, onAddProcedure }) => {
  const [form] = Form.useForm();

  const handleAddProcedure = () => {
    form
      .validateFields()
      .then((values) => {
        // Ваши действия с данными формы, например, отправка на сервер
        onAddProcedure(values);
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };

  return (
    <Modal
      title="Добавить новую процедуру"
      visible={true}
      onCancel={onCancel}
      footer={[
        <Button className="noBtn" key="cancel" onClick={onCancel}>
          Отмена
        </Button>,
        <Button
          className="addBtn"
          key="add"
          type="primary"
          onClick={handleAddProcedure}
        >
          Добавить
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="procedureCode"
          label="Код процедуры"
          rules={[
            { required: true, message: "Введите код процедуры" },
            {
              pattern: /^[a-zA-Z0-9. ]{2,}$/,
              message: "Минимум 2 символа, разрешены буквы, цифры и точка",
            },
            {
              pattern: /^[^,]*$/,
              message: "Запятые не разрешены",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="procedureCategory"
          label="Категория процедуры"
          rules={[
            { required: true, message: "Введите название категории процедуры" },
            {
              pattern: /^[а-яА-Яa-zA-Z0-9. ]{2,}$/,
              message:
                "Минимум 2 символа, разрешены русские и латинские буквы, цифры и точка",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="procedureName"
          label="Название процедуры"
          rules={[
            { required: true, message: "Введите название процедуры" },
            {
              pattern: /^[а-яА-Яa-zA-Z0-9. ]{2,}$/,
              message:
                "Минимум 2 символа, разрешены русские и латинские буквы, цифры и точка",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="procedurePrice"
          label="Цена процедуры"
          rules={[
            { required: true, message: "Введите цену процедуры" },
            {
              pattern: /^[0-9.]+$/,
              message: "Разрешены только цифры и точка",
            },
            {
              pattern: /^[^,]*$/,
              message: "Запятые не разрешены",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};
