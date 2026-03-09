export const UxBase = {
  isLoading: { type: Boolean, default: false },
};

export const UxContainer = {
  ...UxBase,
  center: { type: Boolean, default: false },
};

export const UxInput = {
  ...UxBase,
  id: { type: String, required: true },
  label: { type: String, required: true },
  autocomplete: { type: String, default: 'on' },
  type: { type: String, default: 'text' },
  minlength: { type: String },
  maxlength: { type: String },
};
