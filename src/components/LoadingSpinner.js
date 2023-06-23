import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Oval
        height={60}
        width={60}
        color="#475569"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#64748b"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoadingSpinner;
