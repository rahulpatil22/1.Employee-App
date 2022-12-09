import configureStore from "redux-mock-store";

describe("add user redux", () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  const updateemployee = () => ({ type: "UPDATE_EMP" });

  it("should dispatch action", () => {
    
    const initialState = {};
    const store = mockStore(initialState);

    
    store.dispatch(updateemployee());

    const actions = store.getActions();
    const expectedPayload = { type: "UPDATE_EMP" };
    expect(actions).toEqual([expectedPayload]);
  });
});
