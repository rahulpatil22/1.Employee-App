import configureStore from "redux-mock-store";

describe("add user redux", () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  const addemployeeclick = () => ({ type: "ADD_EMP_CLICK" });

  it("should dispatch action", () => {
    
    const initialState = {};
    const store = mockStore(initialState);

    
    store.dispatch(addemployeeclick());

    const actions = store.getActions();
    const expectedPayload = { type: "ADD_EMP_CLICK" };
    expect(actions).toEqual([expectedPayload]);
  });
});
