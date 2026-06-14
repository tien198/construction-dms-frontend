import type { Bidder } from "@/types/domain/bidder.type";
import type { BidderStoreApi } from "../store/factory/bidder.store.type";
import { FormField } from "@/components/form-ui/form-field";
import { Form, type FormProps } from "react-router";
import { useStore } from "zustand";
import { forwardRef } from "react";
import { FormText } from "@/components/form-ui/form-text";

type Props = {
  storeApi: BidderStoreApi;
  disabled?: boolean;
} & {
  footer?: () => React.ReactNode;
} & FormProps;

export const BidderForm = forwardRef<HTMLFormElement, Props>(
  ({ storeApi, disabled = false, footer, ...formProps }, ref) => {
    const bidder = useStore(storeApi, (state) => state.bidder);
    const setField = useStore(storeApi, (state) => state.setField);

    const handleChange =
      (field: keyof Bidder) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setField(field, e.target.value);
      };

    return (
      <Form
        ref={ref}
        id="create-bidder-form"
        aria-label="Biểu mẫu thêm nhà thầu"
        noValidate
        method="post"
        className={disabled ? "text-black/60" : ""}
        {...formProps}
      >
        {/* ── Section: Thông tin cơ bản ─────────────────────────── */}
        <fieldset className="mb-8">
          <legend className="mb-4 text-base font-medium">
            Thông Tin Cơ Bản
          </legend>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              id="bidder-name"
              label="Tên nhà thầu"
              name="name"
              required
              fullWidth
              placeholder="Công ty TNHH…"
              autoComplete="organization"
              value={bidder.name}
              onChange={handleChange("name")}
              disabled={disabled}
            />

            <FormField
              fullWidth
              id="bidder-tax-id"
              label="Mã số thuế"
              name="tax_id"
              required
              placeholder="0123456789…"
              autoComplete="off"
              spellCheck={false}
              inputMode="numeric"
              value={bidder.tax_id}
              onChange={handleChange("tax_id")}
              disabled={disabled}
            />

            <FormText
              fullWidth
              id="bidder-address"
              label="Địa chỉ"
              name="address"
              required
              placeholder="Số nhà, đường, phường/xã…"
              autoComplete="street-address"
              value={bidder.address}
              onChange={handleChange("address")}
              disabled={disabled}
            />
          </div>
        </fieldset>

        {/* ── Section: Người đại diện ───────────────────────────── */}
        <fieldset className="mb-8">
          <legend className="mb-4 text-base font-medium">
            Người Đại Diện Pháp Lý
          </legend>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              id="bidder-representative-name"
              label="Họ và tên"
              name="representative_name"
              required
              placeholder="Nguyễn Văn A…"
              autoComplete="name"
              value={bidder.representative_name}
              onChange={handleChange("representative_name")}
              disabled={disabled}
            />

            <FormField
              id="bidder-representative-position"
              label="Chức vụ"
              name="representative_position"
              required
              placeholder="Giám đốc…"
              autoComplete="organization-title"
              value={bidder.representative_position}
              onChange={handleChange("representative_position")}
              disabled={disabled}
            />
          </div>
        </fieldset>

        {/* ── Section: Tài chính & Liên lạc ────────────────────── */}
        <fieldset className="mb-8">
          <legend className="mb-4 text-base font-medium">
            Tài khoản ngân hàng
          </legend>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              fullWidth
              id="bidder-bank-account-number"
              label="Số tài khoản"
              name="bank_account_number"
              required
              placeholder="19034567890123…"
              autoComplete="off"
              spellCheck={false}
              inputMode="numeric"
              value={bidder.bank_account_number}
              onChange={handleChange("bank_account_number")}
              disabled={disabled}
            />

            <FormField
              id="bidder-bank-name"
              label="Tên ngân hàng"
              name="bank_name"
              required
              placeholder="Sacombank"
              autoComplete="off"
              value={bidder.bank_name}
              onChange={handleChange("bank_name")}
              disabled={disabled}
            />

            <FormField
              id="bidder-bank-branch"
              label="Chi nhánh ngân hàng"
              name="bank_branch"
              required
              placeholder="Vũng Tàu"
              autoComplete="off"
              value={bidder.bank_branch}
              onChange={handleChange("bank_branch")}
              disabled={disabled}
            />

            <FormField
              id="bidder-phone-number"
              label="Số điện thoại"
              name="phone_number"
              type="tel"
              required
              placeholder="0912 345 678…"
              autoComplete="tel"
              inputMode="tel"
              value={bidder.phone_number}
              onChange={handleChange("phone_number")}
              disabled={disabled}
            />

            <FormField
              id="bidder-email"
              label="Email"
              name="email"
              type="email"
              required
              placeholder="contact@company.vn…"
              autoComplete="email"
              spellCheck={false}
              value={bidder.email}
              onChange={handleChange("email")}
              disabled={disabled}
            />
          </div>
        </fieldset>
        {footer && footer()}
      </Form>
    );
  },
);
