import { Form } from "antd";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import { DASHBOARD_TEXT } from "../constants/dashboard.text";

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
  const handleSubmit = async (values: FormValues) => {
    try {
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
      footer={null}
      width={600}
    >
      <Form<FormValues> form={form} layout="vertical" onFinish={handleSubmit}>
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
          <Input
            autoFocus
            placeholder={DASHBOARD_TEXT.modal.titlePlaceholder}
          />
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

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Creating..." : DASHBOARD_TEXT.modal.submit}
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateTaskModal;
