import configureStore from "redux-mock-store";

describe("add user redux", () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  const editemployee = () => ({ type: "EDIT_EMP" });

  it("should dispatch action", () => {
    
    const initialState = {};
    const store = mockStore(initialState);

    
    store.dispatch(editemployee());

    const actions = store.getActions();
    const expectedPayload = { type: "EDIT_EMP" };
    expect(actions).toEqual([expectedPayload]);
  });
});
