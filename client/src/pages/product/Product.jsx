import { Link, useNavigate, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { updateProducts } from "../../redux/apiCalls";
import app from "../../firebase";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [prodStats, setProdStats] = useState([]);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const dispatch = useDispatch();

  console.log(productId);
  console.log(prodStats);
  console.log(file);
  console.log(dispatch);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  console.log(product);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setProdStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleChange = (e) => {
    let value = e.target.value === "" ? e.target.placeholder : e.target.value; 
    setInputs((prev) => {
      return { ...prev, [e.target.name]: value};
    });
  };
  const handleCategories = (e) => {
    let value = e.target.value ? e.target.value.split(",") : e.target.placeholder; 
    setCategories(value);
  };
  const handleSize = (e) => {
    let value = e.target.value ? e.target.value.split(",") : e.target.placeholder; 
    setSize(value);
   };
  const handleColor = (e) => {
    let value = e.target.value ? e.target.value.split(",") : e.target.placeholder; 
    setColor(value);
    };

  let history = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(file)
    const fileName = file !== null ? new Date().getTime() + file.name : product.img.split("/")[7];
    console.log(fileName)
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Can't upload file because of error");
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: categories,
            size: size,
            color: color,
          };
          updateProducts(productId, product, dispatch);
          console.log(downloadURL);
          console.log(product.img);
          console.log(inputs);
          console.log(productId);
          console.log(product._id);
          console.log(product);
          history(`/products/`);
        });
      }
    );

  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={prodStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={
                product.img !== null
                  ? product.img
                  : "https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"
              }
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">{prodStats}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              name="title"
              type="text"
              placeholder={product.title}
              // value={product.title}
              onChange={handleChange} required
            />
            <label>Product Description</label>
            <input
              name="desc"
              type="text"
              placeholder={product.desc}
              // value={product.desc}
              onChange={handleChange} required
            />
            <label>Product Price</label>
            <input
              name="price"
              type="number"
              placeholder={product.price}
              // value={product.price}
              onChange={handleChange} required
            />
            <label>Product Categories</label>
            <input
              name="categories"
              type="text"
              placeholder={product.categories}
              // value={product.categories}
              onChange={handleCategories} required
            />
            <label>Product Size</label>
            <input
              name="size"
              type="text"
              placeholder={product.size}
              // value={product.size}
              onChange={handleSize} required
            />
            <label>Product Color</label>
            <input
              name="color"
              type="text"
              placeholder={product.color}
              // value={product.color}
              onChange={handleColor} required
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleChange} required>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
              name="file"
              placeholder={product.img}
                src={
                  product.img !== null
                    ? product.img
                    : "https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"
                }
                alt=""
                className="productUploadImg"
                onChange={(e) => {
                  console.log(e.target.files[0])
                  let value = e.target.files[0] === null ? product.img : e.target.files[0];
                  setFile(value)}}
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                name="file"
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className="productButton" type="submit" onClick={handleClick}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
