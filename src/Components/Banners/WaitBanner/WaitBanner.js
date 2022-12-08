import ErrorBanner from "../ErrorBanner/ErrorBanner";
import LoadingBanner from "../LoadingBanner/LoadingBanner";

function WaitBanner({ err, loading }) {
  if (err) {
    return <ErrorBanner msg={err} />;
  }
  if (loading) {
    return <LoadingBanner />;
  }
}

export default WaitBanner;
