import { Form } from "antd";

import { DASHBOARD_TEXT } from "../constants/dashboard.text";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";

type FormValues = {
  title: string;
  description?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (values: FormValues) => Promise<void>;
  loading: boolean;
};

const CreateTaskModal = ({ open, onClose, onCreate, loading }: Props) => {
  const [form] = Form.useForm();
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await onCreate(values);
      form.resetFields();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title={DASHBOARD_TEXT.modal.title}
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      okText={DASHBOARD_TEXT.modal.submit}
      confirmLoading={loading}
      width={600}
    >
      <Form<FormValues> form={form} layout="vertical">
        <Form.Item
          label={DASHBOARD_TEXT.modal.taskTitle}
          name="title"
          rules={[
            {
              required: true,
              message: DASHBOARD_TEXT.modal.titleRequired,
            },
          ]}
        >
          <Input placeholder={DASHBOARD_TEXT.modal.titlePlaceholder} />
        </Form.Item>
        <Form.Item
          label={DASHBOARD_TEXT.modal.taskDescription}
          name="description"
        >
          <Input.TextArea
            rows={4}
            placeholder={DASHBOARD_TEXT.modal.descriptionPlaceholder}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateTaskModal;
