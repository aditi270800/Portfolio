// import React from "react";
// import { IoClose } from "react-icons/io5";

// const Modal = (props) => {
//   const {
//     label = "",
//     children,
//     footerComponent = "",
//     showFooter = false,
//     openModal = null,
//   } = props;
//   return (
//     <div className="flex fixed justify-center flex-wrap w-[100vw] top-0 left-0 mx-0 my-auto h-full z-auto overflow-hidden bg-slate-500 opacity-0">
//       <div className="overflow-x-hidden overflow-y-hidden mx-auto my-0 rounded-md pb-[18px] bg-white self-center w-[90%]">
//         <div className="flex sticky pl-28 shadow-md shadow-[rgba(57, 63, 72, 0.3)]">
//           <p className="text-4xl font-bold text-start">{label}</p>
//           <span className="group-hover:rotate-90 duration-300">
//             <IoClose size={30} className="ml-3" />
//           </span>
//         </div>
//         <div className="h-full overflow-y-auto overflow-x-hidden relative px-24 my-8">
//           {children}
//         </div>
//         {showFooter && (
//           <div className="border-t-2 border-solid border-black shadow-md shadow-[rgba(57, 63, 72, 0.3)] w-full h-[60%] pl-28">
//             {footerComponent ? footerComponent : <button onClick={() => openModal(false)}>Close</button>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
// import { getPathData } from "Utils/helpers";
import { IoClose } from "react-icons/io5";

const useStyles = createUseStyles((theme) => ({
  modal__wrap: {
    position: "fixed",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    zIndex: "100",
    overflowX: "hidden",
    backgroundColor: "rgba(31, 32, 41, 0.75)",
    pointerEvents: "none",
    // opacity: 0,
  },

  visible: {
    pointerEvents: "auto",
    opacity: 1,
    transition: "all 30ms ease-in-out",
  },

  modal: {
    overflowY: "hidden",
    overflowX: "hidden",
    // @ts-ignore
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "0 auto",
    // @ts-ignore
    borderRadius: theme.borderRadius,
    // @ts-ignore
    paddingBottom: theme.padding * 2 + 2,
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    // height: "90%",
    // "@media (min-width: 1024px)": {
    //   // @ts-ignore
    //   width: (props) => getPathData(ModalStyle, [props?.size, "width"], "100%"),
    //   height: (props) =>
    //     // @ts-ignore
    //     getPathData(ModalStyle, [props?.size, "height"], "100%"),
    // },
  },
  modalCont: {
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    // @ts-ignore
    paddingLeft: theme.padding * 3,
    // @ts-ignore
    paddingRight: theme.padding * 3,
    // @ts-ignore
    marginTop: theme.margin,
    // @ts-ignore
    marginBottom: theme.margin,
  },
  modalHeader: {
    boxShadow: "0 1px 1px rgba(57, 63, 72, 0.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // @ts-ignore
    paddingLeft: theme.padding * 2 + 10,
    // @ts-ignore
    margin: theme.margin * 0,
    position: "sticky",
    // height: (props) =>
    //   // @ts-ignore
    //   getPathData(headerStyle, [props?.size, "height"], "100%"),
  },
  modalFooter: {
    boxShadow: "1px rgba(57, 63, 72, 0.3)",
    borderTop: "1px solid rgb(211,211,211)",
    width: "100%",
    height: "60px",
    // @ts-ignore
    paddingLeft: theme.padding * 2 + 10,
    // @ts-ignore
    margin: theme.margin * 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeIcon: {
    width: "30px",
    height: "30px",
    // @ts-ignore
    margin: theme.margin,
    cursor: "pointer",
  },
}));

// const ModalStyle = {
//   extraSmall: {
//     height: "35%",
//     width: "35%",
//   },
//   small: {
//     height: "40%",
//     width: "40%",
//   },
//   medium: {
//     width: "60%",
//     height: "60%",
//   },
//   large: {
//     height: "80%",
//     width: "80%",
//   },
// };
// const headerStyle = {
//   extraSmall: {
//     height: "40px",
//   },
//   small: {
//     height: "50px",
//   },
//   medium: {
//     height: "70px",
//   },
//   large: {
//     height: "90px",
//   },
// };

const Modal = (props) => {
  const {
    open = false,
    children,
    backdropStyle = {},
    modalStyle = {},
    headerStyle = {},
    onClose = null,
    title = "",
    titleComponent = null,
    buttonHandler = null,
    footerComponent = null,
    size = "medium",
    showFooter = false,
    // overrideCloseStyle = "",
    overrideModalCont = "",
    overrideModalParent = "",
    overrideModalHeader = "",
    overrideModalFooter = "",
    modalParentStyle = {},
    testID = "modalID",
    // closeIcontTestId = "modalCloseIcon",
    showHeader = true,
    // headerTitleType = "",
  } = props;

  const classes = useStyles({ ...props, size });

  const {
    visible,
    modal__wrap,
    modal,
    modalCont,
    modalHeader,
    modalFooter,
    // closeIcon,
  } = classes;

  const modalRef = useRef(null);

  useEffect(() => {
    if (open && modalRef?.current) {
      console.log("-------------");

      modalRef?.current?.classList?.add("visible");
    } else {
      modalRef?.current?.classList?.remove("visible");
    }
  }, [open]);
  console.log("modalRef.current", modalRef.current, open);
  return (
    <React.Fragment>
      <div ref={modalRef} style={backdropStyle} className={modal__wrap}>
        <div
          //   justify="between"
          //   direction="column"
          className={`${modal} ${overrideModalParent}`}
          style={modalParentStyle}
          data-testid={testID}
        >
          {showHeader ? (
            <div
              //   justify="between"
              //   align="center"
              style={{ ...headerStyle }}
              className={`${modalHeader} ${overrideModalHeader}`}
            >
              {titleComponent ? (
                titleComponent()
              ) : (
                <h1
                  testID="modalHeaderTitle"
                  //   type={headerTitleType ? headerTitleType : "h1"}
                >
                  {title}
                </h1>
              )}
              <img
                src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIgMTAuOTMgNS43MTktNS43MmMuMTQ2LS4xNDYuMzM5LS4yMTkuNTMxLS4yMTkuNDA0IDAgLjc1LjMyNC43NS43NDkgMCAuMTkzLS4wNzMuMzg1LS4yMTkuNTMybC01LjcyIDUuNzE5IDUuNzE5IDUuNzE5Yy4xNDcuMTQ3LjIyLjMzOS4yMi41MzEgMCAuNDI3LS4zNDkuNzUtLjc1Ljc1LS4xOTIgMC0uMzg1LS4wNzMtLjUzMS0uMjE5bC01LjcxOS01LjcxOS01LjcxOSA1LjcxOWMtLjE0Ni4xNDYtLjMzOS4yMTktLjUzMS4yMTktLjQwMSAwLS43NS0uMzIzLS43NS0uNzUgMC0uMTkyLjA3My0uMzg0LjIyLS41MzFsNS43MTktNS43MTktNS43Mi01LjcxOWMtLjE0Ni0uMTQ3LS4yMTktLjMzOS0uMjE5LS41MzIgMC0uNDI1LjM0Ni0uNzQ5Ljc1LS43NDkuMTkyIDAgLjM4NS4wNzMuNTMxLjIxOXoiLz48L3N2Zz4="
                // className={`${closeIcon} ${overrideCloseStyle}`}
                className="h-10 w-10 ml-3"
                onClick={onClose}
                // data-testid={closeIcontTestId}
                alt="modal-close-icon"
              />
              {/* <IoClose onClick={onClose} size={30} className="ml-3" /> */}
            </div>
          ) : null}
          <div
            style={modalStyle}
            className={`${modalCont} ${overrideModalCont}`}
          >
            {children}
          </div>
          {showFooter ? (
            <div
              //   justify="between"
              //   align="center"
              overrideClass={`${modalFooter} ${overrideModalFooter}`}
            >
              {footerComponent ? (
                footerComponent()
              ) : (
                <button
                  //   btnType="filled"
                  // @ts-ignore
                  onClick={buttonHandler}
                >
                  Click
                </button>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  footerComponent: PropTypes.func,
  titleComponent: PropTypes.func,
  buttonHandler: PropTypes.func,
  overrideStyle: PropTypes.object,
  children: PropTypes.node,
  size: PropTypes.oneOf(["extraSmall", "small", "medium", "large"]),
  title: PropTypes.string,
  overrideCloseStyle: PropTypes.string,
  overrideModalCont: PropTypes.string,
  overrideModalParent: PropTypes.string,
  overrideModalHeader: PropTypes.string,
  overrideModalFooter: PropTypes.string,
  showFooter: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  testID: PropTypes.string,
  backdropStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  showHeader: PropTypes.bool,
  modalParentStyle: PropTypes.object,
  closeIcontTestId: PropTypes.string,
  headerTitleType: PropTypes.string,
};

export default Modal;
