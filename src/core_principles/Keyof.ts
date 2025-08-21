interface SignupFormState {
    email: string;
    name: string;
}
interface ActionPayload<T> {
    key : keyof T;
    value: string;
}
// Usage with SignupFormState
type SignupFormAction = ActionPayload<SignupFormState>

const updateEmailAction: SignupFormAction = {
    key: "email",
    value: "new_email@example.com",
}

const updateNameAction: SignupFormAction = {
    key: "name",
    value: "John Doe",
}

updateEmailAction.key
updateNameAction.key