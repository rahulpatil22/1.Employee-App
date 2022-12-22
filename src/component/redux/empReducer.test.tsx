import configureStore from "redux-mock-store";

describe("add user redux", () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  const addemployee = () => ({ type: "ADD_EMP" });

  it("should dispatch action", () => {
    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(addemployee());

    const actions = store.getActions();
    const expectedPayload = { type: "ADD_EMP" };
    expect(actions).toEqual([expectedPayload]);
  });
});
