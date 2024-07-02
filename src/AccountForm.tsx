import React from "react";
import FormWrapper from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountProps) => {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input
        type="email"
        required
        autoFocus
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        autoFocus
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
