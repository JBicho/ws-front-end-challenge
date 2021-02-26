import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import TestRenderer from "react-test-renderer";
import toastContext from "../../../../components/Generic/Toast/Context/main";
import useProvideToast from "../../../../components/Generic/Toast/hooks/useProvideToast";
import Toast from "../../../../components/Generic/Toast/main";

describe("Toast component tests", () => {
  it("Should return an empty div", () => {
    const component = TestRenderer.create(<Toast />);
    const emptyDiv = component.root.findByType("div");

    expect(emptyDiv.children).toStrictEqual([]);
    expect(emptyDiv.props).toStrictEqual({});
  });

  it("Should render an error message", () => {
    const { result } = renderHook(() => useProvideToast());

    act(() => {
      result.current.setToastInfo("Dummy message");
    });

    // eslint-disable-next-line react/prop-types
    const ProvideToast = ({ children }) => (
      <toastContext.Provider value={{ toastInfo: "Dummy Message" }}>
        {children}
      </toastContext.Provider>
    );

    const component = TestRenderer.create(
      <ProvideToast>
        <Toast />
      </ProvideToast>
    );

    const errorTitle = component.root.findByType("h2");
    const errorDetails = component.root.findByType("p");

    expect(errorTitle.children.join("")).toContain("Error");
    expect(errorDetails.children.join("")).toContain("Dummy Message");
  });
});
