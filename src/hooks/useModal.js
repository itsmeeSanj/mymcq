import React from "react";

export function useModal() {
  const [isModalShow, setIsModalShow] = React.useState(false);
  const modalRef = React.useRef(null);

  function modalClose() {
    setIsModalShow((show) => !show);
  }

  React.useEffect(
    function () {
      function ESC(e) {
        if (e.key === "Escape") {
          modalClose();
        }
      }
      document.addEventListener("keydown", ESC);
      return () => document.removeEventListener("keydown", ESC);
    },
    [modalClose]
  );

  //   React.useEffect(
  //     function () {
  //       function clickOutside(e) {
  //         if (!modalRef.current || modalRef.current.contains(e.target)) {
  //           console.log("outside");
  //           modalClose();
  //         }
  //       }

  //       document.addEventListener("keydown", clickOutside);
  //       return () => document.addEventListener("keydown", clickOutside);
  //     },
  //     [modalRef]
  //   );

  return { isModalShow, modalClose };
}
