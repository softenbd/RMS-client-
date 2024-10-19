import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="shrink-0">
        <p>Logo</p>
      </div>
    </Link>
  );
};

export default Logo;
